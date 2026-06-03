import urllib.request
import urllib.parse
import urllib.error
import re
import sys
import os
import json
import http.cookiejar
import http.client


def fetch_url(url, data=None, headers=None, method=None):
    default_headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                      "(KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
    }

    if headers:
        default_headers.update(headers)

    req = urllib.request.Request(url, data=data, headers=default_headers, method=method)

    try:
        resp = urllib.request.urlopen(req)
        return resp.read().decode("utf-8")
    except http.client.IncompleteRead as e:
        return e.partial.decode("utf-8")


def api_request(redmine_url, api_key, method, path, payload=None):
    if not api_key:
        raise Exception("REDMINE_API_KEY is missing. API actions need API key.")

    url = redmine_url.rstrip("/") + path

    data = None
    headers = {
        "X-Redmine-API-Key": api_key,
        "Content-Type": "application/json",
        "Accept": "application/json",
    }

    if payload is not None:
        data = json.dumps(payload).encode("utf-8")

    req = urllib.request.Request(url, data=data, headers=headers, method=method)

    try:
        resp = urllib.request.urlopen(req)
        body = resp.read().decode("utf-8")
        if not body:
            return {}
        return json.loads(body)
    except urllib.error.HTTPError as e:
        error_body = e.read().decode("utf-8", errors="ignore")
        raise Exception(f"API {method} {path} failed: HTTP {e.code} - {error_body}")


def extract_issue_ids(commit_message):
    if not commit_message:
        return []

    ids = re.findall(r"#(\d+)", commit_message)
    return list(dict.fromkeys(ids))


def find_or_create_roadmap(redmine_url, api_key, project_id, roadmap_name):
    print(f"Checking roadmap/version: {roadmap_name}")

    versions_data = api_request(
        redmine_url,
        api_key,
        "GET",
        f"/projects/{project_id}/versions.json"
    )

    versions = versions_data.get("versions", [])

    for version in versions:
        if version.get("name") == roadmap_name:
            print(f"✅ Roadmap already exists: {roadmap_name} ID={version.get('id')}")
            return version.get("id")

    print(f"Roadmap not found. Creating: {roadmap_name}")

    payload = {
        "version": {
            "name": roadmap_name,
            "status": "open",
            "sharing": "none"
        }
    }

    created = api_request(
        redmine_url,
        api_key,
        "POST",
        f"/projects/{project_id}/versions.json",
        payload
    )

    version_id = created.get("version", {}).get("id")

    if not version_id:
        raise Exception("Roadmap created but version ID not returned.")

    print(f"✅ Roadmap created: {roadmap_name} ID={version_id}")
    return version_id


def get_issue(redmine_url, api_key, issue_id):
    data = api_request(
        redmine_url,
        api_key,
        "GET",
        f"/issues/{issue_id}.json"
    )
    return data.get("issue")


def update_issue_for_qa(redmine_url, api_key, issue_id, project_id, version_id, ready_for_qa_status_id, munawar_user_id):
    issue = get_issue(redmine_url, api_key, issue_id)

    if not issue:
        print(f"⚠️ Issue #{issue_id} not found. Skipped.")
        return False

    issue_project_id = str(issue.get("project", {}).get("id"))

    if issue_project_id != str(project_id):
        print(f"⚠️ Issue #{issue_id} belongs to another project ({issue_project_id}). Skipped.")
        return False

    issue_payload = {
        "issue": {
            "fixed_version_id": int(version_id),
            "due_date": "",
            "estimated_hours": ""
        }
    }

    if ready_for_qa_status_id:
        issue_payload["issue"]["status_id"] = int(ready_for_qa_status_id)

    if munawar_user_id:
        issue_payload["issue"]["assigned_to_id"] = int(munawar_user_id)

    try:
        api_request(
            redmine_url,
            api_key,
            "PUT",
            f"/issues/{issue_id}.json",
            issue_payload
        )

        print(f"✅ Issue #{issue_id} updated: roadmap added, Ready for QA, assigned to Munawar, due date cleared.")
        return True

    except Exception as e:
        print(f"⚠️ Issue #{issue_id} update with due_date blank failed: {e}")
        print(f"Retrying issue #{issue_id} without due_date...")

        issue_payload["issue"].pop("due_date", None)

        api_request(
            redmine_url,
            api_key,
            "PUT",
            f"/issues/{issue_id}.json",
            issue_payload
        )

        print(f"✅ Issue #{issue_id} updated without due_date change.")
        return True


def update_platform_version_with_login(redmine_url, username, password, version, platform_type, project_id):
    print(f"Starting Redmine platform update for {platform_type} version {version}...")

    cj = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj))
    urllib.request.install_opener(opener)

    login_url = redmine_url.rstrip("/") + "/login"

    try:
        html = fetch_url(login_url)
    except Exception as e:
        print(f"Failed to load login page: {e}")
        sys.exit(1)

    token_match = re.search(r'name="authenticity_token" value="([^"]+)"', html)
    if not token_match:
        token_match = re.search(r'meta name="csrf-token" content="([^"]+)"', html)

    if not token_match:
        print("Could not find auth token on login page. HTML snippet:")
        print(html[:1000])
        sys.exit(1)

    auth_token = token_match.group(1)

    login_data = urllib.parse.urlencode({
        "username": username,
        "password": password,
        "authenticity_token": auth_token
    }).encode("utf-8")

    try:
        fetch_url(login_url, data=login_data)
    except Exception as e:
        print(f"Login failed: {e}")
        sys.exit(1)

    platforms_url = redmine_url.rstrip("/") + "/project_progress_tracker/platforms"

    try:
        html = fetch_url(platforms_url)
    except Exception as e:
        print(f"Failed to load platforms page: {e}")
        sys.exit(1)

    token_match = re.search(r'name="authenticity_token" value="([^"]+)"', html)
    if not token_match:
        token_match = re.search(r'meta name="csrf-token" content="([^"]+)"', html)

    if not token_match:
        print("Could not find auth token on platforms page. Login might have failed. HTML snippet:")
        print(html[:1000])
        sys.exit(1)

    auth_token = token_match.group(1)

    platform_type = platform_type.lower().strip()

    if platform_type in ["android", "ios"]:
        field_name = f"platforms[{project_id}][{platform_type}_internal_build_version]"
    elif platform_type in ["web", "crm"]:
        field_name = f"platforms[{project_id}][{platform_type}_prod_build_version]"
    else:
        print(f"Invalid PLATFORM_TYPE: {platform_type}")
        sys.exit(1)

    update_data = urllib.parse.urlencode({
        "utf8": "✓",
        "authenticity_token": auth_token,
        field_name: version
    }).encode("utf-8")

    try:
        fetch_url(platforms_url, data=update_data)
        print(f"✅ Successfully updated Redmine {platform_type} build version to: {version}")
    except Exception as e:
        print(f"❌ Failed to submit platform update: {e}")
        sys.exit(1)


def update_redmine():
    redmine_url = os.environ.get("REDMINE_URL", "https://redmine.techozon.com")

    username = os.environ.get("REDMINE_USER")
    password = os.environ.get("REDMINE_PASS")
    api_key = os.environ.get("REDMINE_API_KEY")

    version = os.environ.get("BUILD_VERSION")
    platform_type = os.environ.get("PLATFORM_TYPE")
    project_id = os.environ.get("REDMINE_PROJECT_ID")

    commit_message = os.environ.get("GIT_COMMIT_MESSAGE", "")
    roadmap_name = os.environ.get("ROADMAP_NAME") or version

    ready_for_qa_status_id = os.environ.get("READY_FOR_QA_STATUS_ID")
    munawar_user_id = os.environ.get("MUNAWAR_USER_ID")

    auto_create_roadmap = os.environ.get("AUTO_CREATE_ROADMAP", "true").lower() == "true"
    auto_update_issues = os.environ.get("AUTO_UPDATE_ISSUES", "true").lower() == "true"

    if not username or not password or not version or not platform_type or not project_id:
        print("Missing environment variables: REDMINE_USER, REDMINE_PASS, BUILD_VERSION, PLATFORM_TYPE, REDMINE_PROJECT_ID are required.")
        sys.exit(1)

    print("====================================")
    print("Starting Redmine automation...")
    print(f"Project ID: {project_id}")
    print(f"Platform: {platform_type}")
    print(f"Build Version: {version}")
    print(f"Roadmap Name: {roadmap_name}")
    print("====================================")

    # 1. Existing working platform update
    update_platform_version_with_login(
        redmine_url=redmine_url,
        username=username,
        password=password,
        version=version,
        platform_type=platform_type,
        project_id=project_id
    )

    # 2. Roadmap + issue automation needs API key
    if not api_key:
        print("⚠️ REDMINE_API_KEY missing. Platform version updated, but roadmap/task automation skipped.")
        return

    version_id = None

    if auto_create_roadmap:
        try:
            version_id = find_or_create_roadmap(
                redmine_url=redmine_url,
                api_key=api_key,
                project_id=project_id,
                roadmap_name=roadmap_name
            )
        except Exception as e:
            print(f"❌ Roadmap create/find failed: {e}")
            print("Platform version update was successful, but roadmap automation failed.")
            return

    if not auto_update_issues:
        print("AUTO_UPDATE_ISSUES=false. Issue update skipped.")
        return

    issue_ids = extract_issue_ids(commit_message)

    if not issue_ids:
        print("⚠️ No Redmine issue IDs found in commit message. Nothing to update.")
        return

    print(f"Found issue IDs from commit: {', '.join(issue_ids)}")

    if not version_id:
        print("⚠️ No roadmap/version ID found. Issues cannot be linked to roadmap.")
        return

    updated_count = 0
    failed_ids = []

    for issue_id in issue_ids:
        try:
            success = update_issue_for_qa(
                redmine_url=redmine_url,
                api_key=api_key,
                issue_id=issue_id,
                project_id=project_id,
                version_id=version_id,
                ready_for_qa_status_id=ready_for_qa_status_id,
                munawar_user_id=munawar_user_id
            )

            if success:
                updated_count += 1
            else:
                failed_ids.append(issue_id)

        except Exception as e:
            print(f"❌ Failed to update issue #{issue_id}: {e}")
            failed_ids.append(issue_id)

    print("====================================")
    print("Redmine automation summary")
    print(f"Platform update: success")
    print(f"Roadmap: {roadmap_name}")
    print(f"Issues updated: {updated_count}")
    print(f"Issues failed/skipped: {len(failed_ids)}")

    if failed_ids:
        print(f"Failed/skipped issue IDs: {', '.join(failed_ids)}")

    print("✅ Automation completed.")
    print("====================================")


if __name__ == "__main__":
    update_redmine()

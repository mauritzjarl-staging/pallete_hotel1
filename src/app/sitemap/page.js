"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sitemap() {
  const [baseDomain, setBaseDomain] = useState("");

  useEffect(() => {
    // Detect the current domain
    if (typeof window !== "undefined") {
      const host = window.location.host;
      if (host.includes(".se")) {
        setBaseDomain("https://www.pallhotellet.se");
      } else {
        setBaseDomain("https://www.pallhotellet.com");
      }
    }
  }, []);

  return (
    <div className="w-full flex text-white bg-[#163c45] flex-col justify-center pt-48 pb-24 px-28">
      <h1 className="text-3xl font-bold">Sitemap for Pallhotellet</h1>
      <ul className="space-y-4 list-disc my-10">
        <li className="text-lg">
          <Link href={`${baseDomain}/`}>Hem</Link>
        </li>
        <li className="text-lg">
          <Link href={`${baseDomain}/tjanster/godshantering`}>
            Tjänster - Godshantering
          </Link>
        </li>
        <li className="text-lg">
          <Link href={`${baseDomain}/tjanster/lagerhallning_inomhus`}>
            Tjänster - Lagerhållning inomhus
          </Link>
        </li>
        <li className="text-lg">
          <Link href={`${baseDomain}/tjanster/ovrigt`}>Tjänster - ovrigt</Link>
        </li>
        <li className="text-lg">
          <Link href={`${baseDomain}/tjanster/lagerhallning_utomhus`}>
            Tjänster - Lagerhållning utomhus
          </Link>
        </li>
        <li className="text-lg">
          <Link href={`${baseDomain}/tjanster/hyra_av_forrad`}>
            Tjänster - Hyra av förråd
          </Link>
        </li>
        <li className="text-lg">
          <Link href={`${baseDomain}/kontakt`}>Kontakt</Link>
        </li>
        <li className="text-lg">
          <Link href={`${baseDomain}/logga_in`}>Logga in</Link>
        </li>
        <li className="text-lg">
          <Link href={`${baseDomain}/offertforfragan`}>offertförfrågan</Link>
        </li>
      </ul>
    </div>
  );
}

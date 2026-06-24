const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('[#ff6300]')) {
        content = content.replace(/\[#ff6300\]/g, 'primary');
        fs.writeFileSync(fullPath, content);
        console.log('Replaced in ' + fullPath);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));

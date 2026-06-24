const fs = require('fs');
const path = require('path');

const mapping = {
  'Rectangle4.webp': 'pallhotellet-logistik-lager.webp',
  'Rectangle38.webp': 'pallhotellet-hitta-oss.webp',
  'Rectangle45.webp': 'pallhotellet-kontakt-karta.webp',
  'Rectangle12.webp': 'pallhotellet-tjanst-1.webp',
  'Rectangle13.webp': 'pallhotellet-tjanst-2.webp',
  'Rectangle14.webp': 'pallhotellet-tjanst-3.webp'
};

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      replaceInDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const [oldName, newName] of Object.entries(mapping)) {
        if (content.includes(oldName)) {
          content = content.split(oldName).join(newName);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log('Replaced in ' + fullPath);
      }
    }
  }
}

replaceInDir(path.join(__dirname, 'src'));

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'public/imgs');

const mapping = {
  'Rectangle4.webp': 'pallhotellet-logistik-lager.webp',
  'Rectangle38.webp': 'pallhotellet-hitta-oss.webp',
  'Rectangle45.webp': 'pallhotellet-kontakt-karta.webp',
  'Rectangle12.webp': 'pallhotellet-tjanst-1.webp',
  'Rectangle13.webp': 'pallhotellet-tjanst-2.webp',
  'Rectangle14.webp': 'pallhotellet-tjanst-3.webp'
};

async function processImages() {
  for (const [oldName, newName] of Object.entries(mapping)) {
    const oldPath = path.join(imgDir, oldName);
    const newPath = path.join(imgDir, newName);
    
    if (fs.existsSync(oldPath)) {
      console.log(`Processing ${oldName}...`);
      await sharp(oldPath)
        .resize({ width: 1000, withoutEnlargement: true })
        .webp({ quality: 50 })
        .toFile(newPath);
      
      const newStat = fs.statSync(newPath);
      console.log(`Created ${newName} - Size: ${(newStat.size / 1024).toFixed(2)} KB`);
    } else {
      console.log(`File not found: ${oldName}`);
    }
  }
}

processImages().catch(console.error);

const sharp = require('c:/Users/LAPTOP CLINIC/AndroidStudioProjects/pallete_hotel1/node_modules/sharp');
const path = require('path');
const fs = require('fs');

const imgDir = 'c:/Users/LAPTOP CLINIC/AndroidStudioProjects/pallete_hotel1/public/imgs';
const imagesToConvert = [
  'contactus.png',
  'Rectangle4.png',
  'Rectangle38.png',
  'Rectangle45.png',
  'Service1.png',
  'Service2.png',
  'Service3.png',
  'Service4.png',
  'Service5.png',
  'Rectangle12.png',
  'Rectangle13.png',
  'Rectangle14.png'
];

async function convert() {
  for (const imgName of imagesToConvert) {
    const inputPath = path.join(imgDir, imgName);
    const outputName = imgName.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    const outputPath = path.join(imgDir, outputName);

    if (fs.existsSync(inputPath)) {
      console.log(`Converting ${imgName} to WebP...`);
      try {
        await sharp(inputPath)
          .webp({ quality: 80 }) // 80 quality is visually lossless but vastly smaller
          .toFile(outputPath);
        
        const oldSize = (fs.statSync(inputPath).size / 1024 / 1024).toFixed(2);
        const newSize = (fs.statSync(outputPath).size / 1024 / 1024).toFixed(2);
        console.log(`Success: ${outputName} generated. Size: ${oldSize}MB -> ${newSize}MB`);
      } catch (err) {
        console.error(`Error converting ${imgName}:`, err);
      }
    } else {
      console.warn(`File not found: ${inputPath}`);
    }
  }
}

convert();

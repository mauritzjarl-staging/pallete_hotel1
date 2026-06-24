const fs = require('fs');
const path = require('path');

function addLazyLoading(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      addLazyLoading(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Replace <img ...> with <img loading="lazy" ...> if it doesn't have loading=
      // Skip the facebook pixel img which is hidden, and logos which might be above the fold.
      // But adding lazy to all imgs except header logo is safe enough.
      
      // We will only do this for images that are likely below the fold. Let's just add it to all images except the logo "Pallhotellet.seTransparent" and the facebook pixel.
      
      const newContent = content.replace(/<img([^>]*)>/g, (match, p1) => {
        if (p1.includes('loading=') || p1.includes('Pallhotellet.seTransparent') || p1.includes('facebook pixel') || p1.includes('priority')) {
          return match;
        }
        return `<img loading="lazy"${p1}>`;
      });

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent);
        console.log('Added lazy loading in ' + fullPath);
      }
    }
  }
}

addLazyLoading(path.join(__dirname, 'src'));

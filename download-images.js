const https = require('https');
const fs = require('fs');
const path = require('path');

// Unsplash API endpoint for iPhone images
const images = [
  {
    name: 'iphone16-front.png',
    url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=1200&fit=crop&crop=center'
  },
  {
    name: 'iphone16-angle.png', 
    url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=1200&fit=crop&crop=center'
  },
  {
    name: 'iphone16-side.png',
    url: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&h=1200&fit=crop&crop=center'
  },
  {
    name: 'iphone16-colors.png',
    url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&h=1200&fit=crop&crop=center'
  }
];

const publicDir = path.join(__dirname, 'public');

// Ensure public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(publicDir, filename);
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('📱 Downloading iPhone images...');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.name);
    } catch (error) {
      console.error(`❌ Error downloading ${image.name}:`, error.message);
    }
  }
  
  console.log('🎉 Download complete!');
}

downloadAllImages(); 
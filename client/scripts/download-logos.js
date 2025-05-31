const https = require('https');
const fs = require('fs');
const path = require('path');

const logos = [
  {
    name: 'chanel',
    url: 'https://i.imgur.com/8BKvWJu.png'
  },
  {
    name: 'dior',
    url: 'https://i.imgur.com/YyPKXJk.png'
  },
  {
    name: 'tom-ford',
    url: 'https://i.imgur.com/0OXnuGS.png'
  },
  {
    name: 'ysl',
    url: 'https://i.imgur.com/8tW5LAk.png'
  },
  {
    name: 'versace',
    url: 'https://i.imgur.com/jemGqGk.png'
  },
  {
    name: 'gucci',
    url: 'https://i.imgur.com/vz3c7ys.png'
  },
  {
    name: 'jo-malone',
    url: 'https://i.imgur.com/WkKyQi6.png'
  },
  {
    name: 'creed',
    url: 'https://i.imgur.com/xhZxYi4.png'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);
        writeStream.on('finish', () => {
          writeStream.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      } else {
        reject(`Failed to download ${url}: ${response.statusCode}`);
      }
    }).on('error', (err) => {
      reject(`Error downloading ${url}: ${err.message}`);
    });
  });
};

const downloadAllLogos = async () => {
  const logosDir = path.join(__dirname, '../public/logos');
  
  // Create logos directory if it doesn't exist
  if (!fs.existsSync(logosDir)) {
    fs.mkdirSync(logosDir, { recursive: true });
  }

  // Download all logos
  for (const logo of logos) {
    const filepath = path.join(logosDir, `${logo.name}.png`);
    try {
      await downloadImage(logo.url, filepath);
    } catch (error) {
      console.error(error);
    }
  }
};

downloadAllLogos().then(() => {
  console.log('All logos downloaded successfully!');
}).catch((error) => {
  console.error('Error downloading logos:', error);
}); 
const { exec } = require('child_process');
const path = require('path');

module.exports = (url) => new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, '../downloads/youtube.mp4');
    exec(`yt-dlp -o "${filePath}" "${url}"`, (err) => err ? reject(err) : resolve(filePath));
});
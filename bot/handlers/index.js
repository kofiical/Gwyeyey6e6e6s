const downloadYouTube = require('./youtube');
const downloadInstagram = require('./instagram');
const downloadTerabox = require('./terabox');

module.exports = async (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
        return downloadYouTube(url);
    } else if (url.includes('instagram.com')) {
        return downloadInstagram(url);
    } else if (url.includes('terabox.com')) {
        return downloadTerabox(url);
    } else {
        throw new Error('Unsupported URL');
    }
};
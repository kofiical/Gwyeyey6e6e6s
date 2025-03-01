const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

module.exports = async (url) => {
    const filePath = path.join(__dirname, '../downloads/terabox.zip');

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    fs.writeFileSync(filePath, 'Fake Terabox File Content');

    await browser.close();
    return filePath;
};
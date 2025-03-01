require('dotenv').config();
const { Telegraf } = require('telegraf');
const express = require('express');
const path = require('path');
const handleDownload = require('./handlers');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('Welcome! Use the button below to open the downloader.', {
        reply_markup: {
            keyboard: [[{ text: 'Open Downloader', web_app: { url: process.env.WEBAPP_URL } }]],
            resize_keyboard: true
        }
    });
});

bot.on('web_app_data', async (ctx) => {
    const { url } = JSON.parse(ctx.webAppData.data);
    await ctx.reply(`Downloading from: ${url}`);

    try {
        const filePath = await handleDownload(url);
        await ctx.replyWithDocument({ source: filePath });
    } catch (err) {
        console.error(err);
        ctx.reply('Failed to download file.');
    }
});

bot.launch();

const app = express();
app.use(express.static(path.join(__dirname, '../webapp')));
app.listen(process.env.PORT || 3000, () => console.log('WebApp ready!'));
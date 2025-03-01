function sendData() {
    const url = document.getElementById('url').value;
    Telegram.WebApp.sendData(JSON.stringify({ url }));
    Telegram.WebApp.close();
}
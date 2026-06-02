const { app, BrowserWindow } = require('electron');
const path = require('path');
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 500, height: 820,
    minWidth: 340, minHeight: 480,
    resizable: true, frame: true,
    title: 'SUOMSIANGCRYPTO MUSIC',
    icon: path.join(__dirname, 'icons', 'icon.png'),
    backgroundColor: '#0d0b06',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false,
    },
    autoHideMenuBar: true,
  });
  win.loadFile(path.join(__dirname, 'index.html'));
  win.webContents.on('before-input-event', (e, input) => {
    if (input.key === 'F12') win.webContents.openDevTools();
  });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });

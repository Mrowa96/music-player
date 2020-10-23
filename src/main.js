const { app, BrowserWindow } = require('electron');

function createWindow() {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  window.loadFile('index.html');
}

app.whenReady().then(createWindow);
app.on('window-all-closed', function handleWindowAllClosed() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function handleActivate() {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

import * as path from "path";
import { app, BrowserWindow } from "electron";
import * as isDev from "electron-is-dev";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDev) {
    win.loadURL(`file://${__dirname}/../index.html`);
  } else {
    win.loadURL(`http://localhost:3000/index.html`);
    win.webContents.openDevTools();
  }
  win.setResizable(true);
  win.focus();
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

import * as path from "path";
import { app, BrowserWindow } from "electron";
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
import * as isDev from "electron-is-dev";
import electronReload from "electron-reload";

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDev) {
    win.loadURL(`http://localhost:3000/index.html`);
    win.webContents.openDevTools();
    electronReload(__dirname, {
      electron: path.join(__dirname, "..", "..", "node_modules", ".bin", `electron${process.platform === "win32" ? ".cmd" : ""}`),
      forceHardReset: true,
      hardResetMethod: "exit",
    });
  } else {
    win.loadURL(`file://${__dirname}/../index.html`);
  }
  win.setResizable(true);
  win.focus();
};

app
  .whenReady()
  .then(() => {
    createWindow();

    // DevTools
    installExtension(REACT_DEVELOPER_TOOLS)
      .then((name: string) => console.log(`Extension : ${name}`))
      .catch((err) => console.error(`[ERROR]`, err));

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });

    app.on("window-all-closed", () => {
      if (process.platform !== "darwin") {
        app.quit();
      }
    });
  })
  .catch((err) => {
    console.error(err);
  });

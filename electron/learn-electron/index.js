const { app, BrowserWindow } = require('electron');
// exe  c/s b/s window 


let win


app.on('ready', () => {
  win = new BrowserWindow({   // chromium 
    webPreferences: {
      nodeIntegration: true
    }
  })
  
  win.loadFile("index.html")
})
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  runQuery: (query : string) => ipcRenderer.invoke('run-query', query)
});

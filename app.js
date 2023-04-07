const path = require('path');
const {serveDir} = require('uwebsocket-serve');
const {App} = require('uWebSockets.js');

const APP_DIR = process.argv[2];

const HOST = 'localhost';
const newPort = Number(process.argv[3]);
const PORT = isNaN(newPort) ? 3000 : newPort;

const publicPath = path.resolve(__dirname, APP_DIR);
const serveStatic = serveDir(publicPath);

const app = App().get('/*', serveStatic);

app.listen(HOST, PORT, () => {
  console.error("Listening on", HOST, PORT);
  console.error('Serving', APP_DIR)
});

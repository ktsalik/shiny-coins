const WebServer = require('./web-server.js');

const webServer = new WebServer();
webServer.start(process.env.PORT); // default port 3001
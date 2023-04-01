const express = require('express');
const cors = require('cors');
const { apiDetails } = require('./controllers/AppController.js');
const { getCoins } = require('./controllers/CoinsController.js');

class WebServer {
  app = null;

  constructor() {
    this.init();
  }

  init() {
    this.app = express();
    this.app.use(cors());
    this.app.get('/', apiDetails);
    this.app.get('/coins', getCoins);
  }

  start(port = 3001) {
    this.app.listen(port, () => {
      console.log(`Shiny Coin web server started at port ${port}`);
    });
  }
}

module.exports = WebServer;
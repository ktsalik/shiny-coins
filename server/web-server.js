const express = require('express');
const cors = require('cors');
const { apiDetails } = require('./controllers/AppController.js');
const { getCoins, getCoin } = require('./controllers/CoinsController.js');

class WebServer {
  app = null;

  constructor() {
    this.init();
  }

  init() {
    this.app = express();
    this.app.use(cors());
    this.app.use(express.static(__dirname + '/public'));
    this.app.get('/', (req, res) => {
      res.sendFile(__dirname + '/public/index.html');
    });
    this.app.get('/coins', getCoins);
    this.app.get('/coins/:coinId', getCoin);

    // no route found
    this.app.use((req, res) => {
      res.sendFile(__dirname + '/public/index.html');
    });
  }

  start(port = 3001) {
    this.app.listen(port, () => {
      console.log(`Shiny Coin web server started at port ${port}`);
    });
  }
}

module.exports = WebServer;
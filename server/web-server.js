import express from 'express';
import cors from 'cors';
import { getCoins, getCoin } from './controllers/CoinsController.js';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    this.app.get('/api/coins', getCoins);
    this.app.get('/api/coins/:coinId', getCoin);

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

export default WebServer;
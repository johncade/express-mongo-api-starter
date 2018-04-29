import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import logger from './src/logger'
import testRouter from './src/routes/testRouter'

const app = express();
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/mongoApis'
const port = process.env.PORT || 8080

// MongoDB
mongoose.connect(mongoUrl);
mongoose.set('debug', true);
// Server config
app.set('port', port);

app.use(bodyParser.json({
  type: '*/*'
}));

app.use(morgan('dev', {
  skip: function (req, res) {
    return res.statusCode < 400
  },
  stream: process.stderr
}));

app.use(morgan('dev', {
  skip: function (req, res) {
    return res.statusCode >= 400
  },
  stream: process.stdout
}));

router(app);

const server = http.createServer(app);

server.listen(app.get('port'), () => {
  logger.info('Server is up and listening at http://localhost:%s', app.get('port'));
});
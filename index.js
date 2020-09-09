require('dotenv').config()

const {
  nodeEnv,
  port,
} = require('config/vars');

const {
  debugInit,
} = require('helpers/debugger');
/**
 * Express configuration.
 */
const server = require('config/express');


server.listen(port, () => {
  debugInit('NODE_ENV', nodeEnv);
  debugInit('we are ready :)');
  console.warn('we are ready :)');
});


// 'use strict';

// const express = require('express');

// // Constants
// const PORT = 8000;
// const HOST = '0.0.0.0';

// // App
// const app = express();
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.listen(PORT, HOST);
// console.log(`Running on http://${HOST}:${PORT}`);

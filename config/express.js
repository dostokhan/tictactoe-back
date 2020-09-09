const express = require('express');
var session = require('express-session')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const database = require('config/database');

// TODO packages
// express-slow-down  // rate limit api requests

const {
  debugDb,
  debugApi,
  debugInit,
} = require('helpers/debugger');
// const makeLogger = require('helpers/debugger');
const {
   errorHandler,
} = require('api/middlewares/error');
const routes = require('api/routes/v1');
const {
  nodeEnv,
  host,
  port,
  corsOrigin,
  sessionSecret,
} = require('config/vars');


const dev =  nodeEnv !== 'production';
debugInit(`NODE_ENV: ${nodeEnv}`);
// create express server
const server = express();

// log requests
server.use(morgan('dev', { stream: { write: msg => debugApi(msg) } }));

// secure apps by setting various HTTP headers
server.use(helmet());

// parse body params and attache them to req.body
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));


// server.use(session({ secret: sessionSecret, cookie: { domain: corsOrigin } }))
server.use(session({ secret: sessionSecret }))
// cookie parse
// server.use(cookieParser());

// gzip compression in production
if (nodeEnv=== 'production') {
  server.use(compression());
}

// enable CORS - Cross Origin Resource Sharing
// debugInit('CORS whitelist: ', corsOrigin);
server.use(
  cors({
    origin: (origin, cb) => {
      const whitelist = corsOrigin
        ? corsOrigin.split(',')
        : [];
      debugInit('CORS whitelist: ', whitelist);
      cb(null, whitelist.includes(origin));
    },
    methods: 'GET, POST, PATCH, DELETE',
    // exposeHeaders: ['mj-token'],
    credentials: true,
  })
);


// server static files
server.use(express.static('public'));


// server.use(authorize, authIsOptional);
server.use('/v1', routes);
server.get('/', (req, res) => {
  res.send('Hello express');
});

server.use(errorHandler);

module.exports = server;


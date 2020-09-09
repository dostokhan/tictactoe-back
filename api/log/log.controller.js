const httpStatus = require('http-status');
// const { omit } = require('lodash');
const Log = require('db/models/log');
const {
  debugApi,
  debugError,
} = require('helpers/debugger');


exports.create = async (req, res, next) => {

  try {
    const { log } = req.body;
    const session = req.headers.session;
    debugApi('SessionId: ' + session);
    debugApi(log);

    const logObj = await Log.create({session, action: log });
    if (logObj) {
      debugApi(logObj);
      res.status(httpStatus.CREATED).json(logObj);
    }
  } catch (error) {
    next(error);
  }
};


exports.list = (req, res) => {
  const session = req.headers.session;
  debugApi('SessionId: ' + session);

  const createdAt = req.params.createdAt;
    Log.find({ session }).sort({'createdAt': 'desc'})
  .then((logs) => {
    res.status(httpStatus.OK).json(logs);
  })
  .catch((err) => {
    debugError(err);
    res.status(httpStatus.OK).json([]);
  });
};


const express = require('express');
const controller = require('./log.controller');

const router = express.Router();

router
  .route('/:createdAt?')
  .get(controller.list)

router
  .route('/')
  .post(controller.create);


module.exports = router;

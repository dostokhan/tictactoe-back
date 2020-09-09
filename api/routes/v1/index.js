const express = require('express');

const logRoutes = require('api/log/log.route');

const router = express.Router();

router.use('/log', logRoutes);

module.exports = router;

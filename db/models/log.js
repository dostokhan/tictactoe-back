const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  session: {
    type: String,
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
}, { timestamps:  { currentTime: () => Math.floor(Date.now() / 1000) }});

const Log = mongoose.model('Log', LogSchema);

module.exports = Log;





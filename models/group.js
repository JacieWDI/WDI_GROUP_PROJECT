const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  event: Number
  //event id from eventful API
});

module.exports = mongoose.model('Group', groupSchema);

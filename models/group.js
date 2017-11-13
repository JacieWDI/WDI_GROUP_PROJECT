const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  body: String,
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
}, {
  timestamps: true
});

const groupSchema = new mongoose.Schema({
  event: Number,
  //event id from eventful API
  comments: [commentSchema]
});

module.exports = mongoose.model('Group', groupSchema);

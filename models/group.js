const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  body: String,
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
}, {
  timestamps: true
});

const groupSchema = new mongoose.Schema({
  name: { type: String, trim: true},
  image: { type: String, trim: true},
  description: { type: String, trim: true},
  eventId: { type: String, trim: true},
  comments: [commentSchema],
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  members: [{type: mongoose.Schema.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Group', groupSchema);

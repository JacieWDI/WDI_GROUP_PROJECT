const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {type: String, unique: true, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  image: String

});

module.exports = mongoose.model('User', userSchema);

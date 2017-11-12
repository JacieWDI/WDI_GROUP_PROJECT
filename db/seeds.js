const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const User = require('../models/user');
User.collection.drop();

User
  .create([{
    userName: 'Matt',
    firstName: 'Matt',
    lastName: 'Yates',
    email: 'matt@matt.com',
    image: 'image'
  }])

  .then((users) => console.log(`${users.length} users created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

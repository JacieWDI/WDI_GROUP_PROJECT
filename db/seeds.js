const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const User = require('../models/user');

User.collection.drop();


User
  .create([{
    userName: 'matt',
    firstName: 'Matt',
    lastName: 'Yates',
    email: 'matt@matt.com',
    image: 'image'
  }, {
    userName: 'plum',
    firstName: 'Plum',
    lastName: 'Moore',
    email: 'plum@plum.com',
    image: 'image'
  },{
    userName: 'julie',
    firstName: 'Julie',
    lastName: 'Bernal',
    email: 'julie@julie.com',
    image: 'image'
  }, {
    userName: 'janis',
    firstName: 'Janis',
    lastName: 'Chan',
    email: 'janis@janis.com',
    image: 'image'
  }])

  .then((users) => console.log(`${users.length} users created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

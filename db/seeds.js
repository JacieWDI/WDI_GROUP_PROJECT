const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');
const express = require('express');
const app = express();
const enviroment = app.get('env');

const { db } = require('../config/enviroment');
mongoose.connect(db[enviroment]);

const User = require('../models/user');
User.collection.drop();

const Group = require('../models/group');
Group.collection.drop();

User
  .create([{
    userName: 'Matt',
    firstName: 'Matt',
    lastName: 'Yates',
    email: 'matt@matt.com',
    image: 'image',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => console.log(`${users.length} users created!`))
  .catch((err) => console.log(err));

Group
  .create([{
    event: 123
  }, {
    event: 456
  }])
  .then((groups) => console.log(`${groups.length} groups created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

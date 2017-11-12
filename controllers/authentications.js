const User  = require('../models/user');
//requiring json webtoken to create tokens for registering and logging in.
const jwt = require('jsonwebtoken');
//requiring secret string needed to generate a JWT token.
const { secret } = require('../config/enviroment');

function authenticationsRegister(req, res){
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1hr' });

      return res.status(201).json({
        message: `Welcome ${user.username}!`,
        token,
        user
      });
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function authenticationsLogin(req, res){
  User
    .findOne({ email: req.body.email })
    .exec()
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) res.status(401).json({ message: 'Unauthorized.' });
      const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1hr' });

      return res.status(200).json({
        message: 'Welcome back.',
        token,
        user
      });
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}
module.exports = {
  register: authenticationsRegister,
  login: authenticationsLogin
};

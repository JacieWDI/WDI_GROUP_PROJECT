const User       = require('../models/user');
const jwt        = require('jsonwebtoken');
const { secret } = require('../config/enviroment');

function authenticationsRegister(req, res, next){
  User
    .create(req.body)
    .then(user => {
      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });

      return res.status(201).json({
        message: 'Thank you for registering.',
        token,
        user
      });
    })
    .catch(next);
}

function authenticationsLogin(req, res, next){
  User
    .findOne({
      email: req.body.email
    })
    .exec()
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        res.status(401).json({
          message: 'Bad Request.' });
      }
      const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1hr' });

      return res.status(200).json({
        message: 'Welcome back.',
        token,
        user
      });
    })
    .catch(next);
}

module.exports = {
  register: authenticationsRegister,
  login: authenticationsLogin
};

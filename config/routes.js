const express = require('express');
const router  = express.Router();

const authentications = require('../controllers/authentications');
const users = require('../controllers/users');
const events = require('../controllers/events');

//AUTHENTICATION
router.route('/register')
  .post(authentications.register);

router.route('/login')
  .post(authentications.login);

//USERS
router.route('/users')
  .get(users.index)
  .post(users.create);

router.route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

router.route('/events')
  .get(events.index);

module.exports = router;

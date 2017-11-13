const express = require('express');
const router  = express.Router();

const authentications = require('../controllers/authentications');
const users = require('../controllers/users');
const groups = require('../controllers/groups');

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

//GROUPS
router.route('/groups')
  .get(groups.index)
  .post(groups.create);

router.route('/groups/:id')
  .get(groups.show)
  .put(groups.update);


module.exports = router;

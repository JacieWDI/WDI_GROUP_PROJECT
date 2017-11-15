const express = require('express');
const router  = express.Router();

const authentications = require('../controllers/authentications');
const users = require('../controllers/users');
const groups = require('../controllers/groups');
const events = require('../controllers/events');
const comments = require('../controllers/comments');


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
  .post(groups.create);

router.route('/groups/:id')
  .get(groups.show)
  .put(groups.update);

// router.route('/groups/find/:id')
//   .get(groups.index);

//COMMENTS
router.route('/groups/:id/comments')
  .post(comments.create);

router.route('/groups/:id/comments/:commentId')
  .delete(comments.delete);

//EVENTS
router.route('/events')
  .get(events.index);

router.route('/events/:id')
  .get(events.show);

router.route('/events/:id/groups')
  .get(groups.index);

module.exports = router;

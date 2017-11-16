const express = require('express');
const router = express.Router();

const authentications = require('../controllers/authentications');
const users = require('../controllers/users');
const groups = require('../controllers/groups');
const events = require('../controllers/events');
const comments = require('../controllers/comments');

//AUTHENTICATION
router.route('/register').post(authentications.register);
router.route('/login').post(authentications.login);

//USERS
router
  .route('/users')
  .get(users.index)
  .post(users.create);
router
  .route('/users/:id')
  .get(users.show)
  .put(users.update)
  .delete(users.delete);

//GROUPS
router.route('/groups').post(groups.create);
router
  .route('/groups/:id')
  .get(groups.show)
  .put(groups.update);

//COMMENTS
router.route('/groups/:id/comments').post(comments.create);
router.route('/groups/:id/comments/:commentId').delete(comments.delete);

//EVENTS
router.route('/events/:id/groups').get(groups.index);
router.route('/events/:lat/:lng').get(events.index);
router.route('/events/:id').get(events.show);

module.exports = router;

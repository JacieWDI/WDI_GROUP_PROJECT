const User = require('../models/user');
const Group = require('../models/group');

function usersIndex(req, res, next) {
  User
    .find()
    .exec()
    .then(users => res.status(200).json(users))
    .catch(next);
}

function usersCreate(req, res, next) {
  User
    .create(req.body)
    .then((user) => res.status(201).json(user))
    .catch(next);
}

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .exec()
    .then(user => {
      if (!user) return res.status(404).json({ message: 'User not found.' });
      Group
        .find()
        .exec()
        .then(groups => {
          const usersGroups = [];
          
          for (var i = 0; i < groups.length; i++) {
            const membersArray = groups[i].members;
            if (groups[i].members.length>0) {
              for (var j = 0; j < membersArray.length; j++) {
                if (`${membersArray[j]}` === user.id) {
                  usersGroups.push(groups[i]);
                }
              }
            }
          }
          const editedUser = user.toObject();
          editedUser.joinedGroups = usersGroups;
          return res.status(200).json(editedUser);
        });
    })
    .catch(next);
}

function usersUpdate(req, res, next) {
  User
    .findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .exec()
    .then(user => {
      if (!user) return res.status(404).json({ message: 'User not found.' });
      return res.status(200).json({ user });
    })
    .catch(next);
}

function usersDelete(req, res, next) {
  User
    .findByIdAndRemove(req.params.id)
    .exec()
    .then(user => {
      if (!user) return res.status(404).json({ message: 'User not found.' });
      return res.sendStatus(204);
    })
    .catch(next);
}

module.exports = {
  index: usersIndex,
  create: usersCreate,
  show: usersShow,
  update: usersUpdate,
  delete: usersDelete
};

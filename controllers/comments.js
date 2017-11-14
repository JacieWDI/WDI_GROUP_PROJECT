const User = require('../models/user');
const Group = require('../models/group');

function commentCreate(req, res, next) {
  Group
    .findById(req.params.id)
    .exec()
    .then(group => {
      if (!group) return res.status(404).json({ message: 'Group not found.' });
      req.body.createdBy = req.user.userId;
      group.comments.push(req.body); // create an embedded record
      group.save();

      return res.status(201).json(group);
    })
    .catch(next);
}

module.exports = {
  create: commentCreate
};

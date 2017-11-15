const Group = require('../models/group');

function groupsIndex(req, res, next) {
  Group
    .find()
    .populate('comments.createdBy')
    .exec()
    .then(groups => res.status(200).json(groups))
    .catch(next);
}

function groupsCreate(req, res, next) {
  // req.body.createdBy = req.user
  // create members array on req.body and push current user id into it
  Group
    .create(req.body)
    .then((group) => res.status(201).json(group))
    .catch(next);
}

function groupsShow(req, res, next) {
  Group
    .findById(req.params.id)
    .populate('comments.createdBy')
    .exec()
    .then(group => {
      if (!group) return res.status(404).json({ message: 'Group not found.' });
      return res.status(200).json(group);
    })
    .catch(next);
}

function groupsUpdate(req, res, next) {
  Group
    .findByIdAndUpdate(req.params.id, req.body.user, { new: true, runValidators: true })
    .exec()
    .then(group => {
      if (!group) return res.status(404).json({ message: 'Group not found.' });
      return res.status(200).json({ group });
    })
    .catch(next);
}

module.exports = {
  index: groupsIndex,
  create: groupsCreate,
  show: groupsShow,
  update: groupsUpdate
};

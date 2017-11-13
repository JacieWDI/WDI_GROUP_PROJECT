const Group = require('../models/group');

function groupsIndex(req, res) {
  Group
    .find()
    .populate('comments.createdBy')
    .exec()
    .then(groups => res.status(200).json(groups))
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function groupsCreate(req, res) {
  Group
    .create(req.body)
    .then((group) => res.status(201).json(group))
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function groupsShow(req, res) {
  Group
    .findById(req.params.id)
    .populate('comments.createdBy')
    .exec()
    .then(group => {
      if (!group) return res.status(404).json({ message: 'Group not found.' });
      return res.status(200).json(group);
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

function groupsUpdate(req, res) {
  Group
    .findByIdAndUpdate(req.params.id, req.body.user, { new: true, runValidators: true })
    .exec()
    .then(group => {
      if (!group) return res.status(404).json({ message: 'Group not found.' });
      return res.status(200).json({ group });
    })
    .catch(() => res.status(500).json({ message: 'Something went wrong.' }));
}

module.exports = {
  index: groupsIndex,
  create: groupsCreate,
  show: groupsShow,
  update: groupsUpdate
};

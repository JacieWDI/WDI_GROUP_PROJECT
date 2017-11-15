const Group = require('../models/group');

function groupsIndex(req, res, next) {
  Group
    .find({ eventId: req.params.id })
    .populate('comments.createdBy')
    .exec()
    .then(groups => res.status(200).json(groups))
    .catch(next);
}

function groupsCreate(req, res, next) {
  // req.body.createdBy = req.user
  // create members array on req.body and push current user id into it

  req.body.createdBy = req.user.userId;
  req.body.members = [req.user.userId];
  console.log(req.body);


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
    .findById(req.params.id)
    .exec()
    .then(group => {
      if (group.members.indexOf(req.user.userId) === -1) {
        group.members.push(req.user.userId);
        group.save();
        return res.status(200).json(group);
      } else {
        return res.status(304).json({ messsage: 'User already assigned to group' });
      }
    })
    .catch(next);

  // if (vm.group.members.indexOf(currentUserService.currentUser.id) === -1) {
  //   vm.group.members.push(currentUserService.currentUser.id);


  // Group
  //   .findByIdAndUpdate(req.params.id, req.body, { new: true })
  //   .exec()
  //   .then(group => {
  //     if (!group) return res.status(404).json({ message: 'Group not found.' });
  //     return res.status(200).json(group);
  //   })
  //   .catch(next);
}

module.exports = {
  index: groupsIndex,
  create: groupsCreate,
  show: groupsShow,
  update: groupsUpdate
};

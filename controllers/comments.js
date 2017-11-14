// const User = require('../models/user');
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
      console.log(group);
      return res.status(201).json(group);
    })
    .catch(next);
}

function commentDelete(req, res) {
  Group
    .findById(req.params.id)
    .exec()
    .then(group => {
      if(!group) return res.status(404).json({ message: 'No group found!'});
      const comment = group.comments.id(req.params.commentId);
      console.log(comment.createdBy, req.user.userId);
      // if (comment.createdBy === req.user.Id) {
      comment.remove();
      group.save();
      // } else {
      //   return res.status(401).json({ message: 'You are not authorised to delete this comment!'})
      // }
    })
    .then(group => res.status(200).json(group))
    .catch(err => res.status(500).json(err));
}

module.exports = {
  create: commentCreate,
  delete: commentDelete
};

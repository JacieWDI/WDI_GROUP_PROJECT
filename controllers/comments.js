const User = require('../models/user');
const Group = require('../models/group');


function commentCreate(req, res) {
  console.log('COMMENT WORKING!!');
  Group
    .findById(req.params.id)
    .exec()
    .then(group => {
      if(!group) return res.status(404).json({ message: 'Group not found.' });
      req.body.createdBy = req.user;
      group.comments.push(req.body); // create an embedded record
      group.save();

      return res.status(201).json(group);
    })
    .catch((err) => res.status(500).json({ message: err }));
}

module.exports = {
  create: commentCreate
};

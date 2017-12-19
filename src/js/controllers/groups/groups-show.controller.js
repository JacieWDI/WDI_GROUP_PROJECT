angular.module('groupProject').controller('groupsShowCtrl', groupsShowCtrl);

groupsShowCtrl.$inject = ['Group', '$stateParams'];
function groupsShowCtrl(Group, $stateParams) {
  const vm = this;

  vm.commentCreate = commentCreate;
  vm.commentDelete = commentDelete;
  vm.updateGroup = update;

  getTheGroup();

  function getTheGroup() {
    Group.get({ id: $stateParams.id }).$promise.then(group => {
      vm.membersArray = [];
      vm.group = group;
      createMemberIdArray(group.members);
    });
  }

  function createMemberIdArray(members) {
    for (var i = 0; i < members.length; i++) {
      vm.membersArray.push(members[i].id);
    }
  }

  function commentCreate() {
    Group.createComment({ id: $stateParams.id }, vm.comment).$promise.then(
      () => {
        getTheGroup();
        vm.comment = null;
      }
    );
  }

  function commentDelete(comment) {
    Group.deleteComment({
      id: $stateParams.id,
      commentId: comment._id
    }).$promise.then(() => {
      getTheGroup();
    });
  }

  function update() {
    Group.update({ id: $stateParams.id }, {}).$promise.then(() => {
      getTheGroup();
    });
  }
}

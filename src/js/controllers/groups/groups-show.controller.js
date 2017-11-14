angular
  .module('groupProject')
  .controller('groupsShowCtrl', groupsShowCtrl);

groupsShowCtrl.$inject = ['Group', '$stateParams', '$rootScope', '$state'];
function groupsShowCtrl(Group, $stateParams, $rootScope, $state) {
  const vm = this;
  console.log('group show loaded');
  vm.commentCreate = commentCreate;
  vm.commentDelete = commentDelete;
  getTheGroup();

  function getTheGroup() {
    Group
      .get({ id: $stateParams.id })
      .$promise
      .then(group => {
        vm.group = group;
      });
  }

  function commentCreate() {
    Group
      .createComment({ id: $stateParams.id }, vm.comment)
      .$promise
      .then(() => {
        getTheGroup();
        vm.comment = null;
      });
  }

  function commentDelete(comment) {
    console.log(comment);
    Group
      .deleteComment({ id: $stateParams.id, commentId: comment._id })//UNSURE!!!
      .$promise
      .then(() => {
        getTheGroup();
        console.log('clicked');
      });
  }
}

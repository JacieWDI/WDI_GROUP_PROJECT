angular
  .module('groupProject')
  .controller('groupsShowCtrl', groupsShowCtrl);

groupsShowCtrl.$inject = ['Group', '$stateParams', '$rootScope', '$state', 'currentUserService', '$scope'];
function groupsShowCtrl(Group, $stateParams, $rootScope, $state, currentUserService, $scope) {
  const vm = this;
  console.log('group show loaded');

  // vm.group = Group.get($stateParams);

  //GET EVENT INFO AND PASS INTO vm.event - $rootScope?

  vm.commentCreate = commentCreate;
  vm.commentDelete = commentDelete;
  vm.updateGroup = update;

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
    Group
      .deleteComment({ id: $stateParams.id, commentId: comment._id })
      .$promise
      .then(() => {
        getTheGroup();
      });
  }

  function update() {
    Group
      .update({ id: $stateParams.id }, {})
      .$promise
      .then(group => {
        vm.group.members = group.members;
      });


    // Group
    //   // .get(vm.userId)
    //   .update({ id: $stateParams.eventId }, vm.group.members)
    //   .$promise
    //   .then(() => {
    //     $state.go('eventsShow', { id: $stateParams.eventId });
    //   });
    //   console.log(vm.group.members);
  }
}

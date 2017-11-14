angular
  .module('groupProject')
  .controller('groupsShowCtrl', groupsShowCtrl);

groupsShowCtrl.$inject = ['Group', '$stateParams', '$rootScope', '$state'];
function groupsShowCtrl(Group, $stateParams, $rootScope, $state) {
  const vm = this;

  vm.group = Group.get({ id: $stateParams.id });

  vm.commentCreate = () => {
    Group
      .comment({ id: $stateParams.id }, vm.comment)
      .$promise
      .then(res => {
        vm.group = res;
        vm.comment = null;
      });
  };

  vm.deleteComment = () => {
    Group
    console.log('clicked');
      // .remove({ id: $stateParams.id }, vm.comment)//UNSURE!!!
      // .$promise
      // .then(() => {
      //   $state.go('home');
      // });
  };
}

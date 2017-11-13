angular
  .module('groupProject')
  .controller('groupsShowCtrl', groupsShowCtrl);

groupsShowCtrl.$inject = ['Group', '$stateParams', '$rootScope'];
function groupsShowCtrl(Group, $stateParams, $rootScope) {
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
}

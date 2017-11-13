angular
  .module('groupProject')
  .controller('groupsShowCtrl', groupsShowCtrl);

groupsShowCtrl.$inject = ['Group', '$stateParams'];
function groupsShowCtrl(Group, $stateParams) {
  const vm = this;

  vm.group = Group.get({ id: $stateParams.id });
}

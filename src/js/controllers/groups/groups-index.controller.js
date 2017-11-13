angular
  .module('groupProject')
  .controller('groupsIndexCtrl', groupsIndexCtrl);

groupsIndexCtrl.$inject = ['Group'];
function groupsIndexCtrl(Group) {
  const vm = this;

  vm.groups = Group.query();
  console.log(Group);
}

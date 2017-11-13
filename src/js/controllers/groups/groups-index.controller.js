angular
  .module('groupProject')
  .controller('groupsIndexCtrl', groupsIndexCtrl);

groupsIndexCtrl.$inject = ['Group'];
function groupsIndexCtrl(Group) {
  const vm = this;
  vm.fetchgroups = fetchGroups;

  function fetchGroups() {
    Group
      .query()
      .$promise
      .then(groups => {
        vm.groups = groups;
        console.log(vm.groups);
      });
  }

  fetchGroups();

}

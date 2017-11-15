angular
  .module('groupProject')
  .controller('groupsNewCtrl', groupsNewCtrl);

groupsNewCtrl.$inject = ['Group', '$state', 'currentUserService', '$stateParams'];
function groupsNewCtrl(Group, $state, currentUserService, $stateParams) {
  const vm = this;

  console.log($stateParams.eventId);

  vm.submitForm = newGroup;



  function newGroup() {
    vm.group.eventId = $stateParams.eventId;
    console.log(vm.group);

    // sending group data to API to be saved to the db.
    Group
      .save(vm.group)
      .$promise
      .then(() => {
        $state.go('eventsShow', {id: $stateParams.eventId});
      });
  }
}

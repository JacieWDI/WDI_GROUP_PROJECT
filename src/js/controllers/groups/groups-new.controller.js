angular
  .module('groupProject')
  .controller('groupsNewCtrl', groupsNewCtrl);

groupsNewCtrl.$inject = ['Group', '$state', 'currentUserService', '$stateParams'];
function groupsNewCtrl(Group, $state, currentUserService, $stateParams) {
  const vm = this;
  // vm.group = Group.get($stateParams.eventId);
  console.log($stateParams.eventId);
  vm.submitForm = newGroup;
  // const eventId = $stateParams.id;
  // vm.group.push(eventId);

  function newGroup() {
    console.log('WORKING');

    vm.group.eventId = $stateParams.eventId;
    console.log(vm.group);

    // sending group data to API to be saved to the db.
    Group
      .save(vm.group)
      .$promise
      .then(() => {
        // $state.go('groupsShow', { id: $stateParams.id });
        $state.go('home');
      });
  }
}


  // 1) create form in new.html
  // 2) create function to handle form submit inside groupsNewCtrl
  // 3) before sending the group to the API, set the eventId to vm.group using $stateParams
  // 4) in the backend controller function for group create, before saving to database add fields for createdBy and members

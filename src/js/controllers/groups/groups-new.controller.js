angular
  .module('groupProject')
  .controller('groupsNewCtrl', groupsNewCtrl);

groupsNewCtrl.$inject = ['Group'];
function groupsNewCtrl(Group) {
  const vm = this;


  // 1) create form in new.html
  // 2) create function to handle form submit inside groupsNewCtrl
  // 3) before sending the group to the API, set the eventId to vm.group using $stateParams
  // 4) in the backend controller function for group create, before saving to database add fields for createdBy and members
}

angular
  .module('groupProject')
  .controller('usersIndexCtrl', usersIndexCtrl);

usersIndexCtrl.$inject = ['User'];
function usersIndexCtrl(User) {
  const vm = this;
  vm.fetchusers = fetchUsers;

  function fetchUsers() {
    User
      .query()
      .$promise
      .then(users => {
        vm.users = users;
        console.log(vm.users);
      });
  }

  fetchUsers();

}

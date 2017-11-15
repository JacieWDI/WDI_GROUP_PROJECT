angular
  .module('groupProject')
  .controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject =['User', '$stateParams'];
function usersShowCtrl(User, $stateParams) {
  const vm = this;
  // vm.group = User;

  User
    .get({id: $stateParams.id})
    .$promise
    .then(user => {
      console.log(user);
      vm.user = user;
    });

}

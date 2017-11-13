angular
  .module('groupProject')
  .controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject =['User', '$stateParams', '$state'];
function usersShowCtrl(User, $stateParams, $state) {
  const vm = this;

  vm.user = User.get($stateParams);

  // vm.delete = user => {
  //   User
  //     .remove({ id: user.id })
  //     .$promise
  //     .then(() => {
  //       $state.go('home');
  //       vm.logout();
  //     });
  // };
}

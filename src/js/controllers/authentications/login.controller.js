angular
  .module('groupProject')
  .controller('loginController', loginController);

loginController.$inject = [
  '$auth',
  '$state',
  'currentUserService'
];
function loginController(
  $auth,
  $state,
  currentUserService
) {
  const vm = this;

  vm.submitForm = login;
  console.log('working');
  function login() {
    $auth
      .login(vm.user)
      .then(() => {
        currentUserService.getUser();
        $state.go('eventsIndex');
      });
    console.log('fired');
  }
}

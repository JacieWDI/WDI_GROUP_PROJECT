angular
  .module('groupProject')
  .controller('registerController', registerController);

registerController.$inject = [
  '$state',
  '$auth',
  'currentUserService'
];
function registerController(
  $state,
  $auth,
  currentUserService
) {
  const vm = this;

  vm.submitForm = register;

  function register() {
    $auth
      .signup(vm.user)
      .then(() => $auth.login(vm.user))
      .then(() => {
        currentUserService.getUser();
        $state.go('eventsIndex');
      });

  }
}

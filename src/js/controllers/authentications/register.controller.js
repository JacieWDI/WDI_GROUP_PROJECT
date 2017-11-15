angular
  .module('groupProject')
  .controller('registerController', registerController);

registerController.$inject = [
  '$state',
  '$auth',
  'currentUserService',
  '$scope',
  '$rootScope'
];
function registerController(
  $state,
  $auth,
  currentUserService,
  $scope,
  $rootScope
) {
  const vm = this;

  vm.submitForm = register;

  function register() {
    $auth
      .signup(vm.user)
      .then(res => {
        if (res.status === 201) {
          $auth
            .login(vm.user)
            .then(() => {
              currentUserService.getUser();
              $state.go('eventsIndex');
            });
        }
      })
      .catch(() => {
        $rootScope.$broadcast('displayMessage', {
          type: 'warning',
          content: 'Incorrect Credentials.'
        });
      });
  }
}

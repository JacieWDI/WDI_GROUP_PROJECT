angular
  .module('groupProject')
  .controller('loginController', loginController);

loginController.$inject = [
  '$auth',
  '$state',
  'currentUserService',
  '$rootScope'

];
function loginController(
  $auth,
  $state,
  currentUserService,
  $rootScope
) {
  const vm = this;

  vm.submitForm = login;

  console.log('working');

  function login() {
    $auth
      .login(vm.user)
      .then(res => {
        if (res.status === 200) {
          currentUserService.getUser();
          $state.go('eventsIndex');
          $rootScope.$broadcast('displayMessage', {
            type: 'success',
            content: `You have successfully logged in ${res.data.user.username}!`
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

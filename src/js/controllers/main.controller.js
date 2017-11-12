angular
  .module('groupProject')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [
  '$transitions',
  '$rootScope',
  'currentUserService',
  '$state'
];

function MainCtrl(
  $transitions,
  $rootScope,
  currentUserService,
  $state
) {

  const vm = this;

  vm.isNavCollapsed = true;
  vm.logout = logout;

  $transitions.onSuccess({}, () => {
    //when the state has been successfully changed, hide the navbar dropdown
    vm.isNavCollapsed = true;
  });

  function logout() {
    currentUserService.removeUser();
  }

  $rootScope.$on('loggedIn', () => {
    console.log('fired, huzzah!!!');
    vm.user = currentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });
}

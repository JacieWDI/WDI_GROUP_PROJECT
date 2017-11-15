angular
  .module('groupProject')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = [
  '$transitions',
  '$rootScope',
  'currentUserService',
  '$state',
  //added timeout
  '$timeout'
];

function MainCtrl(
  $transitions,
  $rootScope,
  currentUserService,
  $state,
  $timeout

) {

  const vm = this;

  vm.isNavCollapsed = true;
  vm.logout = logout;
  vm.closeMessage = closeMessage;

  $transitions.onSuccess({}, () => {
    //when the state has been successfully changed, hide the navbar dropdown
    vm.isNavCollapsed = true;
  });

  // function logout() {
  //   currentUserService.removeUser();
  // }

  $rootScope.$on('loggedIn', () => {
    console.log('fired, huzzah!!!');
    vm.user = currentUserService.currentUser;
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });

  $rootScope.$on('error', (e, err) => {
    if(err.status === 401) {
      $state.go('login');
      $rootScope.$broadcast('displayMessage', {
        type: 'danger',
        content: err.data.message
      });
    }
  });
  $rootScope.$on('displayMessage', (e, message) => {
    vm.message = message.content;
    vm.messageType = message.type;

    $timeout(closeMessage, 1500);
  });

  function logout() {
    currentUserService.removeUser();
    $rootScope.$broadcast('displayMessage', {
      type: 'info',
      content: 'You have successfully logged out.'
    });
  }

  function closeMessage() {
    vm.message     = null;
    vm.messageType = null;
  }
}

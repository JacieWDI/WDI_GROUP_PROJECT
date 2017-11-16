angular.module('groupProject').controller('eventsIndexCtrl', eventsIndexCtrl);

eventsIndexCtrl.$inject = ['Event', '$stateParams', '$rootScope'];

function eventsIndexCtrl(Event, $stateParams, $rootScope) {
  const vm = this;

  vm.loadingGif = false;

  // listen for broadcast addLoadingGif, vm.loadingGif = true;
  $rootScope.$on('addLoadingGif', () => (vm.loadingGif = true));

  $rootScope.$on('removeLoadingGif', () => (vm.loadingGif = false));

  // $rootScope.$on('removeLoadingGif', () => {
  //   vm.loadingGif = false;
  // });
}

angular
  .module('groupProject')
  .controller('eventsIndexCtrl', eventsIndexCtrl);

eventsIndexCtrl.$inject = ['Event', '$stateParams', '$rootScope'];


function eventsIndexCtrl(Event, $stateParams, $rootScope) {
  const vm = this;
  $rootScope.$on('the data is ready, remove loading icon', (event, args) => {
    vm.data = args.data;
  });

}

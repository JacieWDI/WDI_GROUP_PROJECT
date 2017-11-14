angular
  .module('groupProject')
  .controller('eventsShowCtrl', eventsShowCtrl);

eventsShowCtrl.$inject = ['Event', '$stateParams'];
function eventsShowCtrl(Event, $stateParams) {
  const vm = this;

  vm.event = Event.get({ id: $stateParams.id });
}

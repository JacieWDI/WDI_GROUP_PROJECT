angular
  .module('groupProject')
  .controller('eventsShowCtrl', eventsShowCtrl);

eventsShowCtrl.$inject = ['Event', '$stateParams', '$http', 'API', '$element'];


function eventsShowCtrl(Event, $stateParams, $http, API, $element) {
  const vm = this;
  vm.group = Event;

  $http
    .get(`${API}/events/${$stateParams.id}`)
    .then(function successCallback(response){
      vm.event = response.data;
      // broadcast message saying data received.
      console.log(vm.event, 'show me the money');
    });

  Event
    .findGroups({id: $stateParams.id})
    .$promise
    .then(groups => {
      vm.groups = groups;
      // console.log(vm.groups);
    });

  // function fetchGroups() {
  //
  // }
  // fetchGroups();
}

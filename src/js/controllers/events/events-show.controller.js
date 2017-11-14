angular
  .module('groupProject')
  .controller('eventsShowCtrl', eventsShowCtrl);

eventsShowCtrl.$inject = ['Event', '$stateParams', '$http', 'API'];


function eventsShowCtrl(Event, $stateParams, $http, API) {
  const vm = this;

  $http
    .get(`${API}/events/${$stateParams.id}`)
    .then(function successCallback(response){
      vm.event = response.data;
    });
}

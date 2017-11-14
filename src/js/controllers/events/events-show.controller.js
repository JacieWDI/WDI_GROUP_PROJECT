angular
  .module('groupProject')
  .controller('eventsShowCtrl', eventsShowCtrl);

eventsShowCtrl.$inject = ['Event', '$stateParams'];
function eventsShowCtrl(Event, $stateParams) {
  const vm = this;
  console.log(vm);

  console.log($stateParams.id);

  $stateParams.get('http://localhost:7000/api/events')
    .then(function successCallback(response){
      const data = response.data;
      console.log(data);
    });

  // make request to API to find event by $stateParams.id
  // set response to vm.event
  // render info out on the show.html



  // vm.event = Event.get({ id: $stateParams.id });
}

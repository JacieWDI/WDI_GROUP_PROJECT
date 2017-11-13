angular
  .module('groupProject')
  .directive('googleMap', googleMap);

// const map = document.getElementsByClassName('map');
// let map = null;


googleMap.$inject = ['$window', '$http'];
function googleMap($window, $http) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '='
    },
    link(scope, element) {
      $http.get('http://localhost:7000/api/events')
        .then(function successCallback(response){
          const json = JSON.parse(response.data);
          console.log(json);
        });
        
      const map = new $window.google.maps.Map(element[0], {
        zoom: 14,
        center: scope.center
      });
      //loop trough the array an generate one marker
    }
  };
}

// url: 'http://api.eventful.com/rest/events/search?app_key=4NdXJf3wjWsTGctn&keywords=books&location=San+Diego&date=Future'

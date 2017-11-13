/* global google:ignore */

angular
  .module('groupProject')
  .directive('googleMap', googleMap);

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

      const map = new $window.google.maps.Map(element[0], {
        zoom: 14,
        center: scope.center
      });


      $http.get('http://localhost:7000/api/events')
        .then(function successCallback(response){
          const data = JSON.parse(response.data);
          console.log(data);
          data.events.event.forEach((location) => {
            addMarker(location);
          });
        });

      function addMarker(location) {
        const latLng = { lat: parseFloat(location.latitude), lng: parseFloat(location.longitude) };

        const marker = new $window.google.maps.Marker({
          position: latLng,
          map: map
          // add in marker icon here
        });
        marker.addListener('click', () => {
          createInfoWindow(marker, location);
        });
      }
      function createInfoWindow(marker, location) {
        const infowindow = new google.maps.InfoWindow({
          content: `
          <div class="infowindow">
            <h3>${location.title}</h3>
            <h3>${location.start_time}</h3>
            <h3>${location.venue_address}</h3>
          </div>
          `
          // adress field will not render
        });
        infowindow.open(map, marker);
      }

    }
  };
}


// url: 'http://api.eventful.com/rest/events/search?app_key=4NdXJf3wjWsTGctn&keywords=books&location=San+Diego&date=Future'

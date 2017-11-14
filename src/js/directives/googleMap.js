/* global google:ignore */

angular
  .module('groupProject')
  .directive('googleMap', googleMap);

let infowindow = null;

googleMap.$inject = ['$window', '$http', '$state', '$compile'];

function googleMap($window, $http, $state, $compile) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '='
    },
    link(scope, element) {
      scope.eventsShow = function() {
        console.log('clicked');
      };

      const map = new $window.google.maps.Map(element[0], {
        zoom: 6,
        center: scope.center
      });

      $http.get('http://localhost:7000/api/events')
        .then(function successCallback(response){
          const data = response.data;
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
        if(infowindow) infowindow.close();

        const infoWindowContent = `
        <div class="infowindow">
          <h3><b>EVENT:</b> ${location.title}</h3>
          <h3><b>VENUE:</b> ${location.venue_name}</h3>
          <h3><b>ADDRESS:</b> ${location.address}</h3>
          <h3><b>CITY:</b> ${location.city_name}</h3>
          <h3><b>DATE AND START TIME:</b> ${location.start_time}</h3>
          <h3><b>ID:</b> ${location.id}</h3>
          <a ui-sref="eventsShow({ id: '${location.id}' })">Read More</a>
        </div>
        `;
        const compiledContent = $compile(infoWindowContent)(scope);

        infowindow = new google.maps.InfoWindow({
          content: compiledContent[0]
          // const read

        });
        infowindow.open(map, marker);
      }

    }
  };
}

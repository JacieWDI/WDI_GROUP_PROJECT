/* global google:ignore */

angular.module('groupProject').directive('googleMap', googleMap);

let infowindow = null;
const markers = [];

googleMap.$inject = [
  '$window',
  '$http',
  '$state',
  '$compile',
  '$rootScope',
  'API'
];

function googleMap($window, $http, $state, $compile, $rootScope, API) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '='
    },
    link(scope, element) {
      const map = new $window.google.maps.Map(element[0], {
        zoom: 13,
        center: scope.center
      });

      $rootScope.$on('newPlaceData', (e, newPlace) => {
        markers.forEach(function(marker) {
          marker.setMap(null);
        });

        map.setCenter(newPlace);
        map.setZoom(13);

        $http
          .get(`${API}/events/${newPlace.lat}/${newPlace.lng}`)
          .then(response => {
            const data = response.data;
            $rootScope.$broadcast('removeLoadingGif');
            data.events.event.forEach(location => {
              addMarker(location);
            });
          });
      });

      function addMarker(location) {
        const latLng = {
          lat: parseFloat(location.latitude),
          lng: parseFloat(location.longitude)
        };

        const marker = new $window.google.maps.Marker({
          position: latLng,
          map: map,
          icon: '/images/note.png'
        });

        markers.push(marker);

        marker.addListener('click', () => {
          createInfoWindow(marker, location);
        });
      }

      function createInfoWindow(marker, location) {
        if (infowindow) infowindow.close();

        const infoWindowContent = `
        <div class="infowindow">
          <h3><b>EVENT:</b> ${location.title}</h3>
          <h3><b>VENUE:</b> ${location.venue_name}</h3>
          <h3><b>ADDRESS:</b> ${location.address}</h3>
          <h3><b>CITY:</b> ${location.city_name}</h3>
          <h3><b>DATE AND START TIME:</b> ${location.start_time}</h3>
          <a ui-sref="eventsShow({ id: '${location.id}' })">Read More</a>
        </div>
        `;
        const compiledContent = $compile(infoWindowContent)(scope);

        infowindow = new google.maps.InfoWindow({
          content: compiledContent[0]
        });
        infowindow.open(map, marker);
      }
    }
  };
}

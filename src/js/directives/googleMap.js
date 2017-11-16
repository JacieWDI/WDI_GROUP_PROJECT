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
        center: scope.center,
        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
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

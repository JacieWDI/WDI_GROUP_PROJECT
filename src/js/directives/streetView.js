angular
  .module('groupProject')
  .directive('streetView', streetView);

streetView.$inject = ['$window', '$timeout'];
function streetView($window, $timeout) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div><div id="map"></div><div id="pano"></div></div>',
    scope: {
      center: '='
    },
    link(scope, element) {
      $timeout(initMap, 2000);

      // listen for broadcast data received, then run initMap();

      function initMap() {

        const latLng = {
          lat: parseFloat(scope.center.lat),
          lng: parseFloat(scope.center.lng)
        };

        var map = new $window.google.maps.Map(element.children()[0], {
          center: latLng,
          zoom: 14
        });

        var panorama = new $window.google.maps.StreetViewPanorama(
          element.children()[1], {
            position: latLng,
            pov: {
              heading: 34,
              pitch: 10
            }
          });
        map.setStreetView(panorama);
      }
    }
  };
}

angular
  .module('groupProject')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window'];
function googleMap($window) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    link(scope, element) {
      new $window.google.maps.Map(element[0], {
        zoom: 14,
        center: { lat: 51.5, lng: -0.07 }
      });
    }
  };
}

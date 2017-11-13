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
      // make the call to the api ==> you will get possibly an arry of stuff

      const map = new $window.google.maps.Map(element[0], {
        zoom: 14,
        center: scope.center
      });
      //loop trough the array an generate one marker


    }
  };
}

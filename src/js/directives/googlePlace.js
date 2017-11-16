angular
  .module('groupProject')
  .directive('googleAutocomplete', googleAutocomplete);

googleAutocomplete.$inject = ['$window', '$rootScope'];
function googleAutocomplete($window, $rootScope) {
  return {
    link: ($scope, element) => {
      const options = {
        types: [],
        componentRestrictions: {}
      };

      const inputAutocomplete = new $window.google.maps.places.Autocomplete(
        element[0],
        options
      );

      inputAutocomplete.addListener('place_changed', getPlaceData);

      function getPlaceData() {
        // addLoadingGif
        $rootScope.$broadcast('addLoadingGif');

        const newPlace = inputAutocomplete.getPlace();
        const placeLatLng = {
          lat: newPlace.geometry.location.lat(),
          lng: newPlace.geometry.location.lng()
        };
        $rootScope.$broadcast('newPlaceData', placeLatLng);
      }
    }
  };
}

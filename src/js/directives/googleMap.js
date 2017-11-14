/* global google:ignore */

angular
  .module('groupProject')
  .directive('googleMap', googleMap);

let infowindow = null;

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
        zoom: 6,
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
        if(infowindow) infowindow.close();

        infowindow = new google.maps.InfoWindow({
          content: `
          <div class="infowindow">
            <h3><b>EVENT:</b> ${location.title}</h3>
            <h3><b>VENUE:</b> ${location.venue_name}</h3>
            <h3><b>ADDRESS:</b> ${location.address}</h3>
            <h3><b>CITY:</b> ${location.city_name}</h3>
            <h3><b>DATE AND START TIME:</b> ${location.start_time}</h3>
            <h3><b>ID:</b> ${location.id}</h3>
            <button>
                <a>Read More</a>
            </button>
          </div>
          `
          // const read

        });
        infowindow.open(map, marker);
      }

    }
  };
}

// NOTES

// custom marker to add in, if statement if the field value is empty


// url: 'http://api.eventful.com/rest/events/search?app_key=4NdXJf3wjWsTGctn&keywords=books&location=San+Diego&date=Future'

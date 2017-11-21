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
        styles: [
          {
            elementType: 'geometry',
            stylers: [
              {
                color: '#212121'
              }
            ]
          },
          {
            elementType: 'labels.icon',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#212121'
              }
            ]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'administrative.country',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#9e9e9e'
              }
            ]
          },
          {
            featureType: 'administrative.land_parcel',
            stylers: [
              {
                visibility: 'off'
              }
            ]
          },
          {
            featureType: 'administrative.locality',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#ff66ff'
              }
            ]
          },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#49e1a1'
              }
            ]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              {
                color: '#181818'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161'
              }
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.stroke',
            stylers: [
              {
                color: '#1b1b1b'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [
              {
                color: '#2c2c2c'
              }
            ]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#8a8a8a'
              }
            ]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [
              {
                color: '#373737'
              }
            ]
          },
          {
            featureType: 'road.arterial',
            elementType: 'labels.text',
            stylers: [
              {
                color: '#373737'
              },
              {
                visibility: 'simplified'
              }
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [
              {
                color: '#3c3c3c'
              }
            ]
          },
          {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [
              {
                color: '#4e4e4e'
              }
            ]
          },
          {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#616161'
              }
            ]
          },
          {
            featureType: 'transit',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#757575'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              {
                color: '#999999'
              }
            ]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [
              {
                color: '#3d3d3d'
              }
            ]
          }
        ]
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
          icon: '/images/map-marker-md.png'
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

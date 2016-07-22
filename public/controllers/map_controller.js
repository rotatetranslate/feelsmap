(function() {
  'use strict';

  angular.module('app')
    .controller('MapController', MapController);

  MapController.$inject = ['userDataService', '$http', 'mapLocsService'];

  function MapController(userDataService, $http, mapLocsService) {
    var vm = this;

    vm.getFeels = mapLocsService.getFeels;
    var organizedFeels;
    mapLocsService.getLocs().then(function(data) {
      organizedFeels = data;
      // console.log('organized feels', organizedFeels);
    }).then(function() {
      initMap();
    }).then(function() {
      // console.log(Object.keys(organizedFeels))
      Object.keys(organizedFeels).forEach(function(feel) {
        return organizedFeels[feel].forEach(function(feelLoc) {
          var marker = new google.maps.Marker({
              position: {lat: feelLoc[0], lng:feelLoc[1]},
              map: map,
            });
        })
      })
    })


    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 34.0312450, lng: -118.2665320},
          zoom: 14
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            userDataService.user.latLng = [pos.lat, pos.lng];

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }

      // Object.keys(organizedFeels).forEach(function(feel) {
      //   return feel.forEach(function(feelLoc) {
      //     var marker = new google.maps.Marker({
      //         position: {lat: feelLoc[0], lng:feelLoc[1]},
      //         map: map,
      //       });
      //   })
      // })
  }


})();

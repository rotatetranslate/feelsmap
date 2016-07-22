(function() {
  'use strict';

  angular.module('app')
    .factory('mapLocsService', mapLocsService);

  mapLocsService.$inject = ['$http'];

  function mapLocsService($http) {
    var service = {};

    service.getFeels = getFeels;
    service.getLocs  = getLocs;

    // gets all feel objects
    function getFeels() {
      return $http.get('/api/feels').then(function(res) {
        return res.data;
      });
    }

    // turns feel objecs into object with arrays of locations for each type of feel
    function getLocs() {
      return $http.get('/api/feels').then(function(res) {
        var feelsLocs = {};
        res.data.forEach(function(datum) {
          datum.feel in feelsLocs ? feelsLocs[datum.feel].push(datum.latLng) : feelsLocs[datum.feel] = [datum.latLng];
        });
        // console.log(feelsLocs);
        return feelsLocs;
      });
    }

    return service;
  }

})();

(function() {
  "use strict";

  angular
      .module("app")
      .controller("FeelsController", FeelsController);

  FeelsController.$inject = ["$state", "$http", "userDataService", "$log", "authService"];

  function FeelsController($state, $http, userDataService, $log, authService) {
    var vm = this;
    vm.addFeel = addFeel;
    vm.newFeel = {};
    vm.user = userDataService.user;

    vm.feels = [
          'stressed',
          'relaxed',
          'happy',
          'sad',
          'annoyed',
          'angry',
          'sublime',
          'in love'
         ]


    function addFeel() {
      vm.newFeel.user = vm.user._id;
      if (!userDataService.user.latLng) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            userDataService.user.latLng = [pos.lat, pos.lng];
      });
      }
      vm.newFeel.latLng = userDataService.user.latLng;
      $http.post('/api/feels', vm.newFeel)
        .then(function(res) {
          $state.go('map');
        });
    }

  }


})();

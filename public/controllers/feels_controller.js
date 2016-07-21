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
    vm.dubTF = dubTF

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

    function dubTF() {
      console.log(vm.user);
    }

    function addFeel() {
      vm.newFeel.user = vm.user._id;
      console.log(vm.newFeel.user);
      $http.post('/api/feels', vm.newFeel)
        .then(function(res) {
        });
    }

  }


})();

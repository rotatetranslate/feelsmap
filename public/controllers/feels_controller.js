(function() {
  "use strict";

  angular
      .module("app")
      .controller("FeelsController", FeelsController);

  FeelsController.$inject = ["$state", "userDataService", "$log", "authService"];

  function FeelsController($state, userDataService, $log, authService) {
    var vm = this;

    vm.selectedFeel = '';

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
  }

})();

(function() {
  'use strict';

  angular.module('app')
    .controller('HeatMapController', HeatMapController);

  HeatMapController.$inject = [];

  function HeatMapController() {
    var vm = this;

    vm.map = new google.maps.Map(document.getElementById('map'), {

    })

  }


})();

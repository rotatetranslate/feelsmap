(function() {
  'use strict'

  angular.module('app', ['ui.router','ui.materialize'])

    .run(['authService', function(authService){
      if (authService.isLoggedIn()) authService.setUser();
    }]);


})();

(function() {
  "use strict";

  angular.module('app')
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/home.html'
      })

      .state('login', {
        // url: '/login',
        templateUrl: '/templates/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })

      .state('register', {
        url: '/register',
        templateUrl: '/templates/register.html'
      })

      .state('map', { // inject feelsDataService
        url: '/map',
        templateUrl: '/templates/map.html',
        controller: 'MapController',
        controllerAs: 'vm'
      })

      .state('user', { // inject feelsDataService
        url: '/user',
        templateUrl: '/templates/user.html',
        controller: 'ProfileController',
        controllerAs: 'vm'
      })

      .state('addFeel', {
        // url: '/feel',
        templateUrl: '/templates/addfeel.html',
        controller: 'FeelsController',
        controllerAs: 'vm'
      })

      // service for geolocation data
    $urlRouterProvider.otherwise("/");
  }

})();

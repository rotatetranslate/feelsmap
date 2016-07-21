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
        url: '/login',
        templateUrl: '/templates/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })

      .state('register', {
        url: '/register',
        templateUrl: '/templates/register.html'
      })

      .state('heatMap', { // inject feelsDataService
        url: '/heatmap',
        templateUrl: '/templates/heatmap.html'
      })

      .state('user', { // inject feelsDataService
        url: '/user',
        templateUrl: '/templates/user.html'
      })

      .state('addFeel', {
        url: '/feel',
        templateUrl: '/templates/addfeel.html',
        controller: 'FeelsController',
        controllerAs: 'vm'
      })

      // service for geolocation data
    $urlRouterProvider.otherwise("/");
  }

})();

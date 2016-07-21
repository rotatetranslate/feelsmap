(function() {
  'use strict';

  angular.module('app')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$http', 'userDataService', 'authService'];

  function ProfileController($http, userDataService, authService) {
    var vm = this;

    vm.currentUser = userDataService.user;

    getUsersFeels();

    function getUsersFeels() {
      var id = vm.currentUser._id
      $http.get(`api/users/${id}`).then(function(res) {
        console.log(res);
      })
    }


  }
})();

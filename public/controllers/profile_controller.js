(function() {
  'use strict';

  angular.module('app')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$http', 'userDataService', 'authService'];

  function ProfileController($http, userDataService, authService) {
    var vm = this;

    vm.currentUser = userDataService.user;

    getUsersFeels();

    ////// chart ///////
    /// example, dummy data
    var ctx = document.getElementById("myChart");

    var data = {
        labels: ["Stressed", "Relaxed", "Happy", "Sad", "Annoyed", "Angry", "Sublime"],
        datasets: [
            {
                label: "June 2016",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: [2, 6, 5, 0, 10, 1, 3]
            },
            {
                label: "July 2016",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: [6, 2, 4, 2, 1, 0, 9]
            }
        ]
    };

       var myRadarChart = new Chart(ctx, {
          type: 'radar',
          data: data
      });

    ///////////////////

    function getUsersFeels() {
      var id = vm.currentUser._id
      $http.get(`api/users/${id}`).then(function(res) {
        console.log(res);
      })
    }


  }
})();

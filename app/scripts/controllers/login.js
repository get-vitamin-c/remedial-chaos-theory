'use strict';

/**
 * @ngdoc function
 * @name remedialChaosTheoryApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the remedialChaosTheoryApp
 */
angular.module('remedialChaosTheoryApp')
  .controller('LoginCtrl', function ($scope, $location, $route, $http) {

    authenticate();

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.accessToken = '';

    $scope.doOAuth = function(user, path)
    {
      $http.post('http://localhost:3000/oauth/token?grant_type=password&client_id=' + clientId + '&client_secret=' + clientSecret + '&username=' + user.username + '&password=' + user.password).success(function(data, status, headers, config) {
            console.log('Good - ' + status);
            $scope.accessToken = sessionStorage.accessToken = data.access_token;
            $location.path(path);
            jQuery('body').removeClass('login');
        }).error (function(data, status, headers, config) {
            console.log('Error - ' + status);
            jQuery('body').addClass('login');
            if (status == 401)
            {
              document.querySelector('#basic-toast').text = "Invalid Username or Password! Try Again.";
              document.querySelector('#basic-toast').show()
            }
        });
    };

  });

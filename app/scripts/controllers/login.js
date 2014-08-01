'use strict';

/**
 * @ngdoc function
 * @name remedialChaosTheoryApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the remedialChaosTheoryApp
 */
angular.module('remedialChaosTheoryApp')
  .controller('LoginCtrl', function ($scope, $location, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.accessToken = '';

    $scope.doOAuth = function(user, path)
    {
      var clientId = '49ce6a8ea752fac503a326890fce62656601f7d200020c1a26d6706fe303c06d';
      var clientSecret = '1986737081d88612da3b454bb0779fe6fa39990b9b88ee3307e1cfa9b82ea178';
      $http.post('http://localhost:3000/oauth/token?grant_type=password&client_id=' + clientId + '&client_secret=' + clientSecret + '&username=' + user.username + '&password=' + user.password).success(function(data, status, headers, config) {
            console.log('Good - ' + status);
            $scope.accessToken = data.access_token;
            alert("Token - " + $scope.accessToken);
            $location.path(path);
        }).error (function(data, status, headers, config) {
            console.log('Error - ' + status);
        });
    };
  });

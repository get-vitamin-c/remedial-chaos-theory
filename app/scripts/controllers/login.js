'use strict';

/**
 * @ngdoc function
 * @name remedialChaosTheoryApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the remedialChaosTheoryApp
 */
angular.module('remedialChaosTheoryApp')
  // .controller('LoginCtrl', function ($scope, $location, $route, $http) {

  //   authenticate();

  //   $scope.accessToken = '';

  //   $scope.doOAuth = function(user, path)
  //   {
  //     $http.post(endpointUrl + '/oauth/token?grant_type=password&client_id=' + clientId + '&client_secret=' + clientSecret + '&username=' + user.username + '&password=' + user.password).success(function(data, status, headers, config) {
  //           console.log('Good - ' + status);
  //           $scope.accessToken = sessionStorage.accessToken = data.access_token;
  //           $location.path(path);
  //           jQuery('body').removeClass('login');
  //       }).error (function(data, status, headers, config) {
  //           console.log('Error - ' + status);
  //           jQuery('body').addClass('login');
  //           if (status == 401)
  //           {
  //             document.querySelector('#basic-toast').text = "Invalid Username or Password! Try Again.";
  //             document.querySelector('#basic-toast').show()
  //           }
  //       });
  //   };

  // });
  .controller('LoginCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService) {
    $scope.credentials = {
      username: '',
      password: ''
    };
    $scope.login = function (credentials) {
      AuthService.login(credentials).then(function (user) {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $scope.setCurrentUser(user);
      }, function () {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
      });
    };
  })
'use strict';

/**
 * @ngdoc function
 * @name remedialChaosTheoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the remedialChaosTheoryApp
 */
angular.module('remedialChaosTheoryApp')
  .controller('MainCtrl', function ($scope, $location) {

  	authenticate();
  	
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.go = function (path) {
      $location.path(path);
    };

  });

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
    $scope.go = function (path) {
      $location.path(path);
    };
  });

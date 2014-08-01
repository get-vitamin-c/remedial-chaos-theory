'use strict';

/**
 * @ngdoc function
 * @name remedialChaosTheoryApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the remedialChaosTheoryApp
 */
angular.module('remedialChaosTheoryApp')
  .controller('TracktionCtrl', function ($scope, $location) {
    $scope.recordDate = null;
    $scope.setToToday = function() { $scope.recordDate = new Date(); };
    $scope.go = function (path) {
      $location.path(path);
    };
  });

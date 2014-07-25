'use strict';

/**
 * @ngdoc overview
 * @name remedialChaosTheoryApp
 * @description
 * # remedialChaosTheoryApp
 *
 * Main module of the application.
 */
angular
  .module('remedialChaosTheoryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

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
    'ngTouch',
    'mm.foundation',
    'ng-polymer-elements'
  ])
  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider
      .when('/login', {
        templateUrl: 'login.html',
        controller: 'LoginCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/history', {
        templateUrl: 'views/history.html',
        controller: 'HistoryCtrl'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .when('/careteam', {
        templateUrl: 'views/careteam.html',
        controller: 'CareteamCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });

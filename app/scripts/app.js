'use strict';

/**
 * @ngdoc overview
 * @name remedialChaosTheoryApp
 * @description
 * # remedialChaosTheoryApp
 *
 * Main module of the application.
 */
 angular.module('remedialChaosTheoryApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'mm.foundation',
  'ngQuickDate',
  'ng-polymer-elements'
  ])
  .config(function ($routeProvider, $locationProvider, ngQuickDateDefaultsProvider) {

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
  .when('/tracktion', {
    templateUrl: 'views/tracktion.html',
    controller: 'TracktionCtrl'
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

  $locationProvider.html5Mode(false);

  // Configure with icons from font-awesome
  return ngQuickDateDefaultsProvider.set({
    closeButtonHtml: "<i class='fa fa-times'></i>",
    buttonIconHtml: "<i class='fa fa-clock-o'></i>",
    nextLinkHtml: "<i class='fa fa-chevron-right'></i>",
    prevLinkHtml: "<i class='fa fa-chevron-left'></i>",
    // Take advantage of Sugar.js date parsing
    parseDateFunction: function(str) {
      var d = Date.create(str);
      return d.isValid() ? d : null;
    }
  });

});
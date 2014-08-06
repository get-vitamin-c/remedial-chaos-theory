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
  .config(function ($routeProvider, $locationProvider, ngQuickDateDefaultsProvider, USER_ROLES) {

  $routeProvider
  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  })
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    data: {
      authorizedRoles: USER_ROLES.all
    }
  })
  .when('/history', {
    templateUrl: 'views/history.html',
    controller: 'HistoryCtrl',
    data: {
      authorizedRoles: USER_ROLES.all
    }
  })
  .when('/tracktion', {
    templateUrl: 'views/tracktion.html',
    controller: 'TracktionCtrl',
    data: {
      authorizedRoles: USER_ROLES.all
    }
  })
  .when('/news', {
    templateUrl: 'views/news.html',
    controller: 'NewsCtrl',
    data: {
      authorizedRoles: USER_ROLES.all
    }
  })
  .when('/careteam', {
    templateUrl: 'views/careteam.html',
    controller: 'CareteamCtrl',
    data: {
      authorizedRoles: USER_ROLES.all
    }
  })
  .when('/profile', {
    templateUrl: 'views/profile.html',
    controller: 'ProfileCtrl',
    data: {
      authorizedRoles: USER_ROLES.all
    }
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

  $scope.$on("$routeChangeSuccess", function($currentRoute, $previousRoute) {
    if ($currentRoute.path == '/login') {
      jQuery('body').addClass('login');
      console.log("login");
    } else {
      jQuery('body').removeClass('login');
      console.log("no login");
    }
  });

})
.constant('USER_ROLES', {
  all: '*'
})
.constant('AUTH_EVENTS', {
  loginSuccess: 'auth-login-success',
  loginFailed: 'auth-login-failed',
  logoutSuccess: 'auth-logout-success',
  sessionTimeout: 'auth-session-timeout',
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

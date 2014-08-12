angular.module('remedialChaosTheoryApp')
  .factory('AuthService', function ($http, Session) {
    var authService = {};

    authService.login = function (credentials) {
      console.log(credentials)
      // var loginUrl = "" + endpointUrl + '&username=' + credentials.username + '&password=' credentials.password;
      return $http({method: 'POST', url: 'http://localhost:3000/oauth/token?grant_type=password&client_id=' + clientId + '&client_secret=' + clientSecret + "&username=" + credentials.username + "&password=" + credentials.password})
        .then(function (res) {
          console.log(res)
          return res.user;
        });
    };

    authService.isAuthenticated = function () {
      return !!Session.userId;
    };

    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;
  })
  .service('Session', function () {
    this.create = function (sessionId, userId, userRole) {
      this.id = sessionId;
      this.userId = userId;
      this.userRole = userRole;
    };
    this.destroy = function () {
      this.id = null;
      this.userId = null;
      this.userRole = null;
    };
    return this;
  })
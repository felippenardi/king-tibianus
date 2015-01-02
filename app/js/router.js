angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'QuestListController'
  });

  $routeProvider.otherwise({ redirectTo: '/home' });

});

'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
var demoApp = angular.module('demoApp', [
  'ngSanitize',
  'ngRoute', 
  'demoAppControllers'
  ]
);

demoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
    	.when('/', {
    		templateUrl: 'views/home.php',
    		controller: ''
    	})
      .otherwise({
        redirectTo: '/'
      });
  }
]);
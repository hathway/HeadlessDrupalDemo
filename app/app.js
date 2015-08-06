'use strict';

var hostname = "http://mike-maxwells-mac.local:7888/";

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ng',
    'ngRoute',
    'myApp.version',
    'myApp.user_login',
    'myApp.content',
    'angular-drupal'
]).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.otherwise({redirectTo: '/content/6'});

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }]);

// Angular Drupal Configuration Settings
angular.module('angular-drupal')
    .config(function ($provide) {
        $provide.value('drupalSettings', {
            sitePath: hostname + '/headless-drupal/drupal',
            endpoint: 'api'
        });
    })
    .filter('html', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    });
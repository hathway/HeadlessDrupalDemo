'use strict';

var hostname = "http://mike-maxwells-mac.local:7888/";

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.version',
    'myApp.user_login',
    'myApp.content',
    'angular-drupal'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/content/6'});
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
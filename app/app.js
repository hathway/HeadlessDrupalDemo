'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'myApp.user_login',
    'myApp.content',
    'angular-drupal'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
// Angular Drupal Configuration Settings
angular.module('angular-drupal').config(function ($provide) {
    $provide.value('drupalSettings', {
        sitePath: 'http://localhost:7888/headless-drupal/drupal',
        endpoint: 'api'
    });
})
    .filter('html', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    });

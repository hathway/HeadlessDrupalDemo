'use strict';

/**
 * @ngdoc overview
 * @name tui.content
 * @description
 * # tui.content
 *
 * Main module of the application.
 */
angular
  .module('tui.content', ['angular-drupal', 'ng', 'ngRoute'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    //$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    $httpProvider.defaults.useXDomain = true;
    //$httpProvider.defaults.headers.common  = {
    //  'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
    //  'Access-Control-Allow-Origin': '*',
    //  'Access-Control-Allow-Headers' : '*'
    //};
    //$httpProvider.defaults.headers.common['X-Requested-With'];

    //$locationProvider.html5Mode(true);
  })
  .config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }]);

angular.module('angular-drupal')
  .config(function ($provide) {
    $provide.value('drupalSettings', {
      sitePath: window.location.origin + '/drupal',
      endpoint: 'api'
    });
  })
  .filter('html', function ($sce) {
    return function (val) {
      return $sce.trustAsHtml(val);
    };
  });

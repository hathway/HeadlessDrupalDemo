'use strict';

/**
 * @ngdoc overview
 * @name tui
 * @description
 * # tui
 *
 * Main module of the application.
 */
angular
  .module('tui', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'jsonFormatter',
    'ui.router',
    'tui.login',
    'tui.dashboard',
    'tui.content'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    // Login routes
    $stateProvider
      .state('newUser', { controller: 'NewuserformCtrl', templateUrl: 'views/newuserform.html', url: '/newUser' });
    $stateProvider
      .state('login', { controller: 'LoginCtrl', templateUrl: 'views/loginform.html', url: '/login' });

    // Logged in routes
    $stateProvider
      .state('main', { abstract: true, url: '/main', templateUrl: 'views/main.html' })
      .state('main.dashboard', { controller: 'DashboardCtrl', templateUrl: 'views/dashboard.html', url: '/dashboard' })
      .state('main.creditReport', { controller: 'CreditreportCtrl', templateUrl: 'views/creditreport.html', url: '/creditReport' })
      .state('main.creditScore', { abstract: true, controller: 'CreditscoreCtrl', templateUrl: 'views/creditscore.html', url: '/creditScore' })
      .state('main.creditScore.summary', { controller: 'CreditscoresummaryCtrl', templateUrl: 'views/creditscoresummary.html', url: '/creditScoreSummary' })
      .state('main.creditScore.details', { controller: 'CreditscoredetailsCtrl', templateUrl: 'views/creditscoredetails.html', url: '/details' });

    // Content page(s)
    $stateProvider
      .state('content', { controller: 'ContentCtrl', templateUrl: 'views/content.html', url: '/content/:id' } );

    //$locationProvider.html5Mode(true);
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('cyan')
      .accentPalette('amber');
  });


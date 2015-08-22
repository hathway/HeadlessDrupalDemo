'use strict';

/**
 * @ngdoc function
 * @name tui.dashboard.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the tui.dashboard
 */
angular.module('tui.dashboard')
  .controller('DashboardCtrl', ['$scope', 'userSessionService', function ($scope, userSessionService) {
    $scope.json = userSessionService.userData.DebtAnalysis;
  }]);

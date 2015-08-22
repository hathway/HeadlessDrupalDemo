'use strict';

/**
 * @ngdoc function
 * @name tui.dashboard.controller:CreditreportCtrl
 * @description
 * # CreditreportCtrl
 * Controller of the tui.dashboard
 */
angular.module('tui.dashboard')
  .controller('CreditreportCtrl', ['$scope', 'userSessionService', function ($scope, userSessionService) {
    $scope.json = userSessionService.userData.Reports;
  }]);

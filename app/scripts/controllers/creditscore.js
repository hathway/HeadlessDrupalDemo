'use strict';

/**
 * @ngdoc function
 * @name tui.dashboard.controller:CreditscoreCtrl
 * @description
 * # CreditscoreCtrl
 * Controller of the tui.dashboard
 */
angular.module('tui.dashboard')
  .controller('CreditscoreCtrl', ['$scope', '$state', 'userSessionService', function ($scope, $state, userSessionService) {
    $scope.json = userSessionService.userData.VantageScores;

    $scope.detailsButtonClicked = function() {
      $state.go('main.creditScore.details');
    };

    $scope.backButtonClicked = function() {
      $state.go('main.creditScore.summary');
    };

  }]);

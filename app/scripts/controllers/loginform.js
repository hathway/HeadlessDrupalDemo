'use strict';

/**
 * @ngdoc function
 * @name tui.dashboard.controller:NewuserformCtrl
 * @description
 * # NewuserformCtrl
 * Controller of the tui.dashboard
 */
angular.module('tui.login')
  .controller('LoginCtrl', ['$scope', '$state', 'userSessionService', function ($scope, $state, userSessionService) {

    $scope.user = { };

    $scope.submit = function() {

      userSessionService.performLogin($scope.user.username, $scope.user.password, function(response) {
        $state.go('main.dashboard');
      });
    }
  }]);

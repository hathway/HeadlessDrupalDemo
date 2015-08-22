'use strict';

/**
 * @ngdoc function
 * @name tui.dashboard.controller:NewuserformCtrl
 * @description
 * # NewuserformCtrl
 * Controller of the tui.dashboard
 */
angular.module('tui.login')
  .controller('NewuserformCtrl', function ($scope, $window) {

    $scope.user = { };

    $scope.submit = function() {
      //$state.go('main.dashboard');
      $window.location.href = "dashboard.html#/main/dashboard";
    }
  });

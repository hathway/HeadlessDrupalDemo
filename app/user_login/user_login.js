'use strict';

angular.module('myApp.user_login', ['ngRoute'])

.controller('UserLoginCtrl', ['$scope', 'drupal', 'userSessionService', function($scope, drupal, userSessionService) {
    $scope.submit = function(user) {
        userSessionService.performLogin(user.name, user.pass, function() {

        });
    };
}]);
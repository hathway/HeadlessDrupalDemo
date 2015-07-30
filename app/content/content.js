'use strict';

angular.module('myApp.content', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/user/content', {
            templateUrl: 'content/content.html',
            controller: 'ContentCtrl'
        });
    }])

    .controller('ContentCtrl', ['$scope', 'drupal', function ($scope, drupal) {
        $scope.content = {};
        $scope.body = "";

        drupal.node_load(1).then(function (node) {
            $scope.content = node;
            $scope.body = node.body.und[0].safe_value;

            drupal.file_load(node.field_hero_image.und[0].fid).then(function(file) {
                $scope.heroImage = {
                    background: 'url(' + file.uri_full + ')'
                };
                $scope.heroImageUrl = file.uri_full;
            });

        });
    }]);
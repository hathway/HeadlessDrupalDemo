'use strict';

var app = angular.module('tui.content')
    .controller('ContentCtrl', ['$scope', '$stateParams', '$http', 'drupal', function ($scope, $stateParams, $http, drupal) {
        $scope.content = {};
        $scope.body = "";

        drupal.node_load($stateParams.id).then(function (node) {
            $scope.content = node;
            $scope.body = node.body.und[0].safe_value;

            // Check for a hero image
            if (node.hasOwnProperty('field_hero_image_wide') && node.field_hero_image_wide.length != 0) {
                drupal.file_load(node.field_hero_image_wide.und[0].fid).then(function(file) {
                    $scope.heroImage = {
                        background: 'url(' + file.uri_full + ')'
                    };
                    $scope.heroImageUrl = file.uri_full;
                });
            }
        });

    }]);
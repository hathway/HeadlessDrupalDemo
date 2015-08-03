'use strict';

angular.module('myApp')
    .controller('MainCtrl', ['$scope', '$http', 'drupal', function ($scope, $http, drupal) {
        $scope.content = {};
        $scope.body = "";

        $http.get(hostname + '/headless-drupal/drupal/?q=content-list').
            success(function(data, status) {

                var nodes = {};
                _.each(data.nodes, function(element,index,list) {
                    var node = element['node'];
                    nodes[node['Nid']] = node;
                });

                _.each(data.nodes, function(element, index, list) {
                    var node = element['node'];
                    var childElementIds = node['Child Pages'].split(',');
                    if (childElementIds != "") {
                        var childNodes = [];
                        _.each(childElementIds, function(element, index, list) {
                            var nid = element.trim();
                            childNodes.push(nodes[nid])
                            delete nodes[nid];
                        });
                        node['Child Pages'] = childNodes;
                    }
                    else {
                        delete node['Child Pages'];
                    }
                });

                $scope.navigationItems = nodes;

            });

    }]);
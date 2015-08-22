/**
 * Created by mikemaxwell on 8/5/15.
 */

angular.module('tui')
    .service('drupalContentService', function ($http) {

    var service = this;

    service.processContentMap = function(contentMap) {

        //_.each(contentMap, function(value, key, list) {
        //
        //});

    };

    service.getContentStructure = function(callback) {

      $http.get(window.location.origin + '/drupal/?q=content-list').
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

          callback(nodes);

        });
    }

    });

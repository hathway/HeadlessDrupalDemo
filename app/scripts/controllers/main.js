'use strict';

/**
 * @ngdoc function
 * @name tui.dashboard.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tui.dashboard
 */
angular.module('tui.dashboard')
    .controller('MainCtrl', function ($scope, $location, $state, $mdSidenav, drupalContentService, userSessionService) {

        $scope.navigationItems = [];

        // Login handling
        $scope.loginButtonTitle = null;
        var setLoginButtonTitle = function(state) {
            $scope.loginButtonTitle = state ? 'Logout' : 'Login';
        };
        setLoginButtonTitle(userSessionService.userData !== undefined);
        $scope.$on('LoginEvent', function(event, status) {
            setLoginButtonTitle(status);
        });

        $scope.loginButtonTouched = function() {
            if ($scope.loginButtonTitle === 'Logout') {
                userSessionService.performLogout();
            }
            $state.go('login');
        };


        drupalContentService.getContentStructure(function(nodes) {
            $scope.navigationItems = nodes;
        });

        $scope.sidebarNavTouched = function(node) {
            $state.go('content', {
                id: node.Nid
            });
        };


        $scope.go = function(route){
            $state.go(route);
        };

        $scope.active = function(route){
            return $state.is(route);
        };

        $scope.tabs = [
            { title: 'Dashboard', route: "main.dashboard", active:false },
            { title: 'Credit Score', route: 'main.creditScore.summary', active:false },
            { title: 'Credit Report', route: 'main.creditReport', active:false }
        ];

        $scope.$on("$stateChangeSuccess", function() {
            $scope.tabs.forEach(function(tab) {
                tab.active = $scope.active(tab.route);
            });
        });

        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

    })

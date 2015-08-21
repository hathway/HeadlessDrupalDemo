/**
 * Created by mikemaxwell on 8/5/15.
 */

angular.module('myApp')
    .service('userSessionService', function ($http) {

        var service = this;
        var visitToken;
        var sessionToken;

        var host = "https://membership.tui.transunion.com";

        service.performLogin = function(username, password, callback) {
            var endpoint = "/tucm/mobile/entry1_0.page";

            var req = {
                method: 'GET',
                url: host+endpoint,
                headers: {
                    utm_source : 'TUIMobileApp',
                    utm_medium : '2_0_2',
                    cid : 'app:mobileApp:iOS'
                }
            };

            // Simple POST request example (passing data) :
            $http(req)
                .then(function(response)
                {
                    callback();
                },
                function()
                {
                    callback();
                });
        };

        var executeLogin = function(user, pass, callback) {
            var endpoint = "/tucm/mobile/redirect1_0.page";

            var req = {
                method: 'GET',
                url: host+endpoint,
                headers: {
                    utm_source : 'TUIMobileApp',
                    utm_medium : '2_0_2',
                    cid : 'app:mobileApp:iOS',
                    'tl.tracking-UUID' : 'undefined',
                    action : 'AUTHENTICATE',
                    DestinationPage : '/tucm/mobile/redirect1_0',
                    visitToken : visitToken,
                    requestToken : sessionToken,
                    'tl.bundleComponentType' : 'SINGLE_REPORT_TU,VANTAGE_SCORE_TU,VANTAGE_SCORE_3BUREAU,MERGE_REPORT_3BUREAU,CHANGE_REPORT_TU,DEBT_ANALYSIS,TRENDING,INSURANCE_SCORES,PROPERTY_VALUE_REPORT',
                    'tl.username' : user,
                    'tl.password' : pass
                }
            };

            // Simple POST request example (passing data) :
            $http(req)
                .then(function(response)
                {
                    callback();
                },
                function()
                {
                    callback();
                });
        };

    });
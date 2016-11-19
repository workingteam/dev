define(['angularAMD', 'ui-route', 'ui-bootstrap', 'ui-bootstrap-tpls'], function (angularAMD)
{
    "use strict";
    var NAWTWebApp = angular.module('NAWTWebApp', ['ui.router', 'ui.bootstrap']);
    NAWTWebApp.config(['$stateProvider', '$urlRouterProvider', "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider)
    {
        //$locationProvider.html5Mode({
        //    enabled: true,
        //    requireBase: false
        //});

        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('default', angularAMD.route({
            url: '/',
            templateUrl: '/app/views/home/index.html',
            controller: 'homeController',
            controllerUrl: 'app/controllers/homeController'
        }))
        .state('customer', angularAMD.route({
            url: '/customer',
            templateUrl: '/app/views/customer/index.html',
            controller: 'customerController',
            controllerUrl: 'app/controllers/customerController'
        }))
    }]);
    return angularAMD.bootstrap(NAWTWebApp);
});
define(['app/app', 'app/services/customersService'], function (app)
{
    "use strict";
    app.controller('customerController', ['$scope', '$modal', '$rootScope', 'customersService',
        function ($scope, $modal, $rootScope, customersService)
        {
            $scope.Customers = [];
            $scope.IsLoading = false;
            $scope.GetList = function ()
            {
                $scope.IsLoading = true;
                customersService.getList().then(function (result)
                {
                    $scope.Customers = result.data;
                    $scope.IsLoading = false;
                });
            }
        }
    ]);
});
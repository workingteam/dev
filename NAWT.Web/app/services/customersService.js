define(['app/app'], function (app)
{
    "use strict";



    app.factory('customersService', ['$http', '$q', function ($http, $q)
    {

        var serviceResult = {};

        serviceResult.getList = function ()
        {
            return $http.get('/Api/customersApi/GetList');
        };    
        return serviceResult;
    }]);
});
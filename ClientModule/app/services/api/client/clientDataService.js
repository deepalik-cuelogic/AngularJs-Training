clientsApp.factory('clientDataService', function ($http) {
    return {
        getClientData: function () {
            return $http.get('http://dev-gahp-clients.azurewebsites.net/api/client/list');
        }
    }
})
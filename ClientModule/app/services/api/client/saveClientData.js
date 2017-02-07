clientsApp.factory('saveClientData', ['$rootScope',  
    function($rootScope) {
        function saveStateData() {
            sessionStorage.saveClientData = angular.toJson(service.state);
        }
        $rootScope.$on("savestatedata", saveStateData);
    }
]);
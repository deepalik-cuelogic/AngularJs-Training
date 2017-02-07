var clientsApp = angular.module('clientsApp',['ui.router' ,'ui.bootstrap'])
.run(function($state, $rootScope){
   $rootScope.$state = $state;
   $rootScope.$on('$stateChangeStart',
    function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params)
      }
    });
    window.onbeforeunload = function(event) {
      $rootScope.$broadcast('savestatedata');
    };
})
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/module/dashboard/view/dashboard.html'
            })
            .state('clients', {
                redirectTo: 'clients.active',
                url: '/clients',
                templateUrl: 'app/module/client/view/clientData.html',
                controller:'clientDataController',
                resolve: {
                  clientData : function (clientDataService) {
                    return clientDataService.getClientData();
                  }
                } 
            })
            // Sub page
            .state('clients.active',{
              url: '/active',
              templateUrl: 'app/module/client/view/clientActive.html',
              controller: 'clientDataController',
              params : {clientDataType: "Active"}
           })
            // Sub page
           .state('clients.archive',{
              url: '/archive',
              templateUrl: 'app/module/client/view/clientArchived.html',
              controller: 'clientDataController',
              params : {clientDataType: "Archive"}
           })
           .state('createClient', {
                redirectTo: 'createClient.info',
                url: '/createClient',
                templateUrl: 'app/module/client/view/createClient.html',
                params: {userDataObj: null},
                controller: 'createClientController'
            })
            // Sub page
            .state('createClient.info',{
              url: '/info',
              templateUrl: 'app/module/client/view/clientInfoTab.html',
              controller: 'createClientController'
           })
           // Sub page
            .state('createClient.contact',{
              url: '/contact',
              templateUrl: 'app/module/client/view/clientContactTab.html',
              params: {userDataObj: null},
              controller: 'createClientController'
           })

            
         $urlRouterProvider.otherwise('/home');
         $locationProvider.html5Mode(true);
}]);
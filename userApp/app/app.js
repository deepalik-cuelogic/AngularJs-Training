var webCourseApp = angular.module('webCourseApp',['ui.router'])
.run(function($state, $rootScope){
   $rootScope.$state = $state;
})
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/module/login/view/login.html',
                controller: 'loginValidationController'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/module/dashboard/view/dashboard.html',
                params: {userDataObj: null},
                controller: 'dashboardController'
            })
        $urlRouterProvider.otherwise('/login');
         $locationProvider.html5Mode(true);
}]);



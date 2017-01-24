var webCourseApp = angular.module('webCourseApp',['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'module/view/login.html',
                controller: 'loginValidationController'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: '/index.html',
                controller: 'dashboardController'
            })
        $urlRouterProvider.otherwise('/login');
}]);
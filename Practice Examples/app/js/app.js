var moduleApp = angular.module('invoiceApp',['ngRoute']);


moduleApp.config(function($routeProvider ,$locationProvider){
    
    $routeProvider
        .when('/', {
            template : 'Welcome to Home Page'
        })
        .when('/invoice', {
            templateUrl : 'app/templates/calculateCost.html',
            controller : 'invoiceController'
        })
        .when('/scopeInheritance', {
            templateUrl : 'app/templates/scopeInheritance.html',
        })
    
//    $locationProvider.html5Mode({
//        enable :true ,
//        requireBase : true
//    });
    $locationProvider.html5Mode(true); 
});
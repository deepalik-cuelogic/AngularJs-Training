'use strict';

var eventApp = angular.module('eventapp',['ngResource' ,'ngRoute'])
                .config(function($routeProvider , $locationProvider){
                    $routeProvider
                     .when('/',{
                            template : 'Welcome to the Events App',
                        })
                     .when('/newEvent',{
                            templateUrl : '../template/NewEvent.html',
                            controller : 'EditEventController'
                        })
                     .when('/createDirective',{
                            templateUrl : 'sampleDirective.html',
                        })
                     $locationProvider.html5Mode(true);
    })
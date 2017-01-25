'use strict';
 webCourseApp.controller('dashboardController' ,
     function dashboardController($scope , userData , $state , $stateParams){
     $scope.loggedInUserData = $state.params.userDataObj;
     $scope.courses = $scope.loggedInUserData[0].courses;
     console.log($state.params.userDataObj);
 });
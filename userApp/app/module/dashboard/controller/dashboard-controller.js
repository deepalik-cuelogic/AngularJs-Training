'use strict';
 webCourseApp.controller('dashboardController' ,
     function dashboardController($scope , userData , $state , $stateParams){
     $scope.loggedInUserData = $state.params.userDataObj;
     $scope.courses = $scope.loggedInUserData[0].courses;
    // console.log($state.params.userDataObj);
     $scope.sortorder ='name'; 
      $scope.currentPage = 0;
    $scope.pageSize = 4;
    $scope.data = $scope.courses.slice(0);
    //function to calculate pagination pages
    $scope.numberOfPages=function(){
        return new Array(Math.ceil($scope.data.length/$scope.pageSize));                
    }
 });
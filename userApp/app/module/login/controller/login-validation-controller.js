'use strict'

 webCourseApp.controller('loginValidationController' ,['$scope' , 'userData' ,'$log' ,'$state' ,
     function loginValidationController($scope , userData ,$log , $state){
     $scope.validateLogin = function(){
     $scope.usersData;   
    //user entered values
        var currentUsername =$scope.username;
        var currentPassword =$scope.password;
       userData.getUserData().then(function(response) {
       var data = response.data,
           status = response.status,
           header = response.header,
           config = response.config;
     // success handler
           $scope.usersData =  data;
           debugger;
           //console.log($scope.usersData);
               //if($scope.username && $scope.password){
            var filteredArray = $scope.usersData.filter(function( obj ) {
            return obj.username === currentUsername && obj.password === currentPassword;
          });
          //console.log(filteredArray);
        for(var x in $scope.usersData){
                if (currentUsername == $scope.usersData[x].username && currentPassword == $scope.usersData[x].password) {
                         //window.location.href = '/index.html';
                         //break;
                    $state.go('dashboard', {userDataObj: filteredArray});
                    //$location.path('dashboard');
                    break;
                 }
                 else {
                     if(x == ($scope.usersData).length-1){
                       $('.login-error').show();
                     }
                     else;
                 }
            }

          
      //}
        }, function(response) {
        var data = response.data,
            status = response.status,
            header = response.header,
            config = response.config;
        // error handler
            $log.warn(data, status, headers(), config);
    });

     }
  }]
);
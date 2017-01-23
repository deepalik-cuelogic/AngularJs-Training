'use strict';

moduleApp.controller('invoiceController' , 
        function invoiceController($scope , invoiceService){
         $scope.qnty = 1;
         $scope.cost = 2;
         $scope.inCurr = 'EUR';
         $scope.currency = invoiceService.currency;  //assigning array created in invoiceService (service)
       
       $scope.total = function(outcurr){
           //calling invoiceService (service) convert function
           
           return ' ' + invoiceService.convert($scope.qnty * $scope.cost , $scope.inCurr , outcurr );
       }
        
        $scope.pay = function(){
            window.alert("Thanks for paying !!!")
        }
});
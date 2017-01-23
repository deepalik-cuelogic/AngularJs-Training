'use strict';

eventApp.directive('greeting' ,function(){
   return{
       restrict : 'E',
       template: '<button type="button" ng-click="sayHello()">Say Hello</button>',
       replace: true,
       controller: function($scope){
           var greetings =['Hello'];
          $scope.sayHello = function(){
              alert(greetings.join());
          } 
          this.addGreeting = function(greeting){
              greetings.push(greeting);
          }
       }
   } 
})
//using controller of another directive
.directive('finish' ,function(){
    return{
        restrict : 'A',
        require : 'greeting',
        link : function(scope , element , attrs , controller){
            controller.addGreeting('Hei');
        }
    }
})
.directive('spanish' ,function(){
    return{
        restrict : 'A',
        require : 'greeting',
        link : function(scope , element , attrs , controller){
            controller.addGreeting('Hola');
        }
    }
})
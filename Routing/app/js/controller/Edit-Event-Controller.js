'use strict';

eventApp.controller('EditEventController' ,
        function EditEventController($scope , eventData){
       
          $scope.saveEvent = function (event , newEventForm){
            if(newEventForm.$valid){
             //window.alert('event ' + event.name + ' saved !');
                
                eventData.save(event)
                  .$promise.then(
                        function(response){console.log('success',response)},
                        function(response){console.log('failure',response)}
                )
          }
      };
});
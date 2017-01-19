eventApp.factory('eventData' ,function($resource){
    return{
       getEvent : function(){
           //return $http({method:'GET' ,url: 'data/event/1.json'}); to get with $http service
           
           return $resource('data/event/:id' , {id:'@id'}).get({id:'1.json'});
         } 
    };
});
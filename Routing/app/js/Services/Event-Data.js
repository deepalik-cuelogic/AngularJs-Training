eventApp.factory('eventData' ,function($resource){
    var resource = $resource('data/event/:id.json' , {id:'@id'} ,{update : { method:'PUT' }});
    return{
       getEvent : function(){
           //return $http({method:'GET' ,url: 'data/event/1.json'}); to get with $http service
           
           return resource.get({id:'1'});
         },
        save : function(event){
            //event.id = '9990';
            return resource.save(event,{id : '9990'});
        }
        
    };
});
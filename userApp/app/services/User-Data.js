webCourseApp.factory('userData' , function($http){
    return{
        getUserData : function(){
            //return $http({method:'GET' ,url: '/assets/data/event/1.json'});
            return $http.get('/assets/data/event/1.json');
        }
    }
    console.log(getUserData());
})
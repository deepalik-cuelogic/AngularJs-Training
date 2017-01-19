'use strict';

eventApp.controller('EventController' ,
        function EventController($scope , eventData ,$log){
    $scope.sortorder ='name';   //desending ordered sorting
    $scope.disabledbtn =true;
    $scope.headerColor ={color:'red'};
    $scope.snippet ='<span style="color:red">Hi There</span>';
    $scope.booleValue = true;
    eventData.getEvent(event).then(function(response) {
    var data = response.data,
        status = response.status,
        header = response.header,
        config = response.config;
    // success handler
        $scope.event =  data;
}, function(response) {
    var data = response.data,
        status = response.status,
        header = response.header,
        config = response.config;
    // error handler
        $log.warn(data, status, headers(), config);
});
//                    .then(function(event){$scope.event =  event})
//                    .error(function(data, status, headers, config){
//                            $log.warn(data, status, headers(), config);
//                        });
       

    $scope.upVoteSession = function(session){
        
        session.upvoteCount++;
    };
    $scope.downVoteSession = function(session){
        
        session.upvoteCount--;
    };
}
);
'use strict';

eventApp.controller('EventController' ,
        function EventController($scope){
    $scope.sortorder ='name';   //desending ordered sorting
    $scope.disabledbtn =true;
    $scope.headerColor ={color:'red'};
    $scope.snippet ='<span style="color:red">Hi There</span>';
    $scope.booleValue = true;
    $scope.event ={
        name: 'Angular app',
        date:12345679,
        time:'6.30PM',
        location :{
            roomNo : 'C-12',
            street : 'Pashan-Sus road',
            city:'Pune',
            province : 'xyz'
        },
        imgURL:'img/logo.png' ,
        sessions :[
            {
                name :'Directives Masterclass',
                creatorName : 'Deepali Kakade',
                level : 'Advanced',
                duration : 1,
                upvoteCount : 0
            },
            {
                name : 'Scopes for fun and profit',
                creatorName : 'Deepali Kakade',
                level : 'Introductory',
                duration : 2,
                upvoteCount : 3
            },
            {
                name : 'Well behaved controllers',
                creatorName : 'Deepali Kakade',
                level : 'Intermediate',
                duration : 3,
                upvoteCount : 0
            }
        ]
    }
    $scope.upVoteSession = function(session){
        
        session.upvoteCount++;
    };
    $scope.downVoteSession = function(session){
        
        session.upvoteCount--;
    };
}
                   
);
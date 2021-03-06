'use strict';

webCourseApp.directive('usersCourses', function(){
  return{
  	restrict : 'E',
	template : '<div class="col-sm-3" ng-repeat="course in courses | orderBy : sortorder |searchFor : searchString | pageStartFrom:currentPage*pageSize | limitTo:pageSize"><div id="course-338" class="item-box"><div class="cover"><a href="http://demo3.pressapps.co/lmspress/course/learn-guitar-in-30-days/"><div class="thumb"><img ng-src="{{course.courseImg}}" ></div></a><div class="price"><span class="amount">{{course.price}}</span></div></div><h4 class="entry-title"><a href="http://demo3.pressapps.co/lmspress/course/learn-guitar-in-30-days/">{{course.name}}</a></h4><p class="entry-summary">{{course.abstract}}</p><div class="proof"><div class="user-count"><span class="glyphicon glyphicon-thumbs-up"></span> &nbsp;{{course.upvoteCount}}</div></div><div class="author"><div class="pull-left"><a><img ng-src="{{course.creatorPhoto}}" class="avatar avatar-64 photo" height="64" width="64"></a></div><div class="info"><a>{{course.creatorName}}</a><p>Online Training Expert</p></div></div></div></div>',
	controller:'dashboardController'
  };
});
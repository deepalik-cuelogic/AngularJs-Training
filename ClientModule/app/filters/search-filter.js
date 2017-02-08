clientsApp.filter('searchFor' ,function(){
	return function(array , searchString){
		if(!searchString){
			return array;
		}
		var result = [];
		//searchString = searchString.toLowerCase();

		angular.forEach(array , function(course){
			if(course.ClientName.toLowerCase().indexOf(searchString) !== -1){
				result.push(course);
			}

		});

		return result;
		
	}
})
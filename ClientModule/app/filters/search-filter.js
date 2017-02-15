clientsApp.filter('searchFor', function () {
    return function (array, searchString) {
        if (!searchString) {
            return array;
        }
        var result = [];
        //searchString = searchString.toLowerCase();
        angular.forEach(array, function (course) {
            if (course.ClientName.match(new RegExp(searchString, "gi"))) {
                result.push(course);
            }
        });
        return result;
    }
})
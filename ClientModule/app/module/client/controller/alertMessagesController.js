clientsApp.controller('alertMessagesController', [
    '$scope', '$modalInstance', 'data'  
    , function ($scope, $modalInstance, data) {
        $scope.data = data;
        $scope.close = function ( /*result*/ ) {
            $modalInstance.close($scope.data);
        };
     }
]);
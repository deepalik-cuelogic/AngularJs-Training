clientsApp.controller('DetailModalController', [
    '$scope', '$modalInstance', 'item',
    function ($scope, $modalInstance, item) {

        $scope.item = item;

        $scope.dismiss = function () {
            $modalInstance.dismiss();
        };

        $scope.close = function () {                    
             $modalInstance.close($scope.item);                       
        };
    }
]);
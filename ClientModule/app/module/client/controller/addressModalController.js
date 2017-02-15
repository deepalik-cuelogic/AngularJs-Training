clientsApp.controller('addressModalController', function ($scope, $modalInstance, item, $controller, $modal) {
    $controller('createClientController', {
        $scope: $scope
    });
    $scope.item = item;
    $scope.dismiss = function () {
        $modalInstance.dismiss();
    };
    $scope.close = function () {
        $modalInstance.close($scope.item);
    };
    $scope.addeditAddress = function () {
        if ($scope.address.Street1 && $scope.address.Street2 && $scope.address.Zip) {
            var address = {};
            angular.copy($scope.address, address);
            $scope.finalAddressArray.push(address);
            $scope.address = {
                Street1: ''
                , Street2: ''
                , Zip: ''
                , City: ''
                , State: ''
                , CountryId: 85
                , CountryName: ''
                , PhoneNumber: ''
            }
        }
    }
});
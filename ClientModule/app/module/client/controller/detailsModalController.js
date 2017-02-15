clientsApp.controller('DetailModalController', [
    '$scope', '$modalInstance', 'item'
    , function ($scope, $modalInstance, item) {
        $scope.countryName = {
            1: 'Australia'
            , 2: 'Bhutan'
            , 3: 'France'
            , 4: 'Germany'
            , 5: 'Hong Kong'
            , 6: 'India'
            , 7: 'Japan'
            , 8: 'united kingdom'
            , 9: 'United States of America'
            , 10: 'united arab emirates'
        , };
        $scope.item = item;
        $scope.dismiss = function () {
            $modalInstance.dismiss();
        };
        $scope.close = function () {
            $modalInstance.close($scope.item);
        };
        $scope.item.CountryId = $scope.countryName[$scope.item.CountryId];
    }

]);
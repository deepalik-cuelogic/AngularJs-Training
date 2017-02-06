 // to show detail modal
         $scope.showDetails = function (item) {
            var modalInstance = $modal.open({
                templateUrl: 'app/module/dashboard/view/detailsModal.html',
                controller: 'clientDataController',                       
                resolve: {
                    item: function () {
                        return  item;
                    },                            
                }
            });

            modalInstance.result.then(function (item) {
                // ok
            }, function () {
                // dismiss
            });
        }
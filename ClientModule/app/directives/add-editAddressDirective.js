 // to show detail modal
 $scope.addEditAddress = function (item) {
     var modalInstance = $modal.open({
         templateUrl: 'app/module/dashboard/view/addressModal.html'
         , controller: 'clientDataController'
         , resolve: {
             item: function () {
                 return item;
             }
         , }
     });
     modalInstance.result.then(function (item) {
         // ok
     }, function () {
         // dismiss
     });
 }
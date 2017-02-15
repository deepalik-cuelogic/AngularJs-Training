clientsApp.factory('setClientDataService', function () {
    return {
        showMessage = function (mode ,message) {

            $scope.data.mode = mode;

            var modalInstance = $modal.open({
              templateUrl: 'app/module/client/view/alertMessages.html',
              controller: 'alertMessagesController',
              backdrop: true,
              keyboard: true,
              backdropClick: true,
              size: 'lg',
              resolve: {
                data: function () {
                  return message;
                }
              }
            });


            modalInstance.result.then(function (selectedItem) {
              $scope.selected = selectedItem;
                //alert( $scope.selected);
            }, function () {
              $log.info('Modal dismissed at: ' + new Date());
            });

          }
    }
}
clientsApp.controller('clientDataController', ['$scope', 'clientData', 'setClientDataService', '$stateParams', '$state', '$modal', 'clientPostDataService'
     , function clientDataController($scope, clientData, setClientDataService, $stateParams, $state, $modal, clientPostDataService) {
        setClientDataService.setData(clientData.data);
        $scope.currentActiveTab = $state.params.clientDataType;
        $scope.dataArray = setClientDataService.getData({
            Action: $scope.currentActiveTab
        });
        $scope.IsContactAvail = 'false'
        $scope.editClientData = function (clientIndex) {
            var dataObjectToSend
            for (var i = 0; i <= $scope.dataArray.length; i++) {
                if ($scope.dataArray[i].ClientId === clientIndex) {
                    dataObjectToSend = $scope.dataArray[i];
                    break;
                }
            }
            $state.go('createClient', {
                userDataObj: dataObjectToSend
            });
        }
        $scope.editClientContact = function (clientIndex) {
            for (var i = 0; i <= $scope.dataArray.length; i++) {
                if ($scope.dataArray[i].ClientId === clientIndex) {
                    dataObjectToSend = $scope.dataArray[i];
                    break;
                }
            }
            $state.go('createClient.contact', {
                userDataObj: dataObjectToSend
            });
        }
        $scope.currentPage = 1;
        $scope.totalData = $scope.dataArray.length;
        $scope.pageSize = 10; // items per page
        $scope.noOfPages = Math.ceil($scope.totalData / $scope.pageSize);
        //modal functions
        $scope.showDetails = function (item) {
            var dataObjectToSend
            for (var i = 0; i <= $scope.dataArray.length; i++) {
                if ($scope.dataArray[i].ClientId === item) {
                    dataObjectToSend = $scope.dataArray[i];
                    break;
                }
            }
            var modalInstance = $modal.open({
                templateUrl: 'app/module/client/view/detailsModal.html'
                , controller: 'DetailModalController'
                , resolve: {
                    item: function () {
                        return dataObjectToSend;
                    }
                , }
            });
            modalInstance.result.then(function (item) {
                // ok
            }, function () {
                // dismiss
            });
        };
        //archive client data
        $scope.archiveClient = function (id) {
                if (confirm("Are you sure you want to archive client?")) {
                    clientPostDataService.postClientArchive({
                        ClientId: id
                    }).then(function (response) {
                        if (response.data) setClientDataService.update({
                            Id: id
                            , Action: $scope.currentActiveTab
                        });
                        $scope.showMessage("success" , "Client Archived");
                    }, function (response) {
                        $scope.showMessage("error" , response.data.Messages[0]);
                    })
                }
            }
        //Restore client data
        $scope.restoreClient = function (id) {
            clientPostDataService.postClientActive({
                ClientId: id
            }).then(function (response) {
                if (response.data) setClientDataService.update({
                    Id: id
                    , Action: $scope.currentActiveTab
                });
                $scope.showMessage("error" , "Client Activated");
            }, function (response) {
                $scope.showMessage("error" , response.data.Messages[0]);
            })
        }
        
         //alert Message modal
        
        $scope.showMessage = function (mode , message) {
            $scope.data = message;
            $scope.mode = mode;

            var modalInstance = $modal.open({
              templateUrl: 'app/module/client/view/alertMessages.html',
              controller: 'alertMessagesController',
              backdrop: true,
              keyboard: true,
              backdropClick: true,
              size: 'lg',
              resolve: {
                data: function () {
                  return $scope.data;
                }
              }
            });


            modalInstance.result.then(function (selectedItem) {
              $scope.selected = selectedItem;
            }, function () {
              $log.info('Modal dismissed at: ' + new Date());
            });

          }
   }

   ]);
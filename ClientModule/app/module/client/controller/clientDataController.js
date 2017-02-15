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
                        alert("Client Archived");
                    }, function (response) {
                        alert(response.data.Messages[0]);
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
                alert("Client Activated");
            }, function (response) {
                alert(response.data.Messages[0]);
            })
        }
   }

   ]);
clientsApp.controller('clientDataController' ,['$scope' , 'clientData', 'setClientDataService', '$stateParams' ,'$state','$modal',
     function clientDataController($scope , clientData , setClientDataService , $stateParams , $state ,$modal){
     	//console.log(clientData.data);
     	setClientDataService.setData(clientData.data);
     	//var fetchedData = setClientDataService.getData();
     	$scope.currentActiveTab = $state.params.clientDataType;

     	$scope.dataArray = setClientDataService.getData({
     		Action: $scope.currentActiveTab
     	});
        $scope.IsContactAvail = 'false'
        //edit client data method
        $scope.editClientData = function(clientIndex){
           //var current =$scope.dataArray[clientIndex];
           $state.go('createClient', {userDataObj: $scope.dataArray[clientIndex]});
        }
         $scope.editClientContact = function(clientIndex){
           //var current =$scope.dataArray[clientIndex];
           $state.go('createClient.contact', {userDataObj: $scope.dataArray[clientIndex]});
        }
		// pagination controls
			$scope.currentPage = 1;
			$scope.totalData = $scope.dataArray.length;
			$scope.pageSize = 10; // items per page
			$scope.noOfPages = Math.ceil($scope.totalData / $scope.pageSize);
         
      //modal functions
       $scope.showDetails = function (item) {

            var modalInstance = $modal.open({
                templateUrl: 'app/module/client/view/detailsModal.html',
                controller: 'DetailModalController',                       
                resolve: {
                    item: function () {
                        return  $scope.dataArray[item];
                    },                            
                }
            });

            modalInstance.result.then(function (item) {
                // ok
            }, function () {
                // dismiss
            });
        };
      
   }

   ]);
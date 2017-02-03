clientsApp.controller('clientDataController' ,['$scope' , 'clientData', 'setClientDataService', '$stateParams' ,'$state',
     function clientDataController($scope , clientData , setClientDataService , $stateParams , $state){
     	//console.log(clientData.data);
     	setClientDataService.setData(clientData.data);
     	//var fetchedData = setClientDataService.getData();
     	$scope.currentActiveTab = $state.params.clientDataType;

     	$scope.dataArray = setClientDataService.getData({
     		Action: $scope.currentActiveTab
     	});


		// pagination controls
			$scope.currentPage = 1;
			$scope.totalData = $scope.dataArray.length;
			$scope.pageSize = 10; // items per page
			$scope.noOfPages = Math.ceil($scope.totalData / $scope.pageSize);

		  }
   ]);
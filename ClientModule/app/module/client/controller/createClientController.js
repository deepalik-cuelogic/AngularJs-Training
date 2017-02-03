clientsApp.controller('createClientController' ,['$scope' , 'clientPostDataService','$stateParams','$state',
     function createClientController($scope , clientPostDataService , $stateParams ,$state){
          var a= $state.params.userDataObj;
     	var msg;
     	$scope.finalAddressArray =[];
     	$scope.addressId = 0;
     	$scope.address ={
     				//AddressId : '',
     				street1 : '',
     				street2 : '',
     				zip : '',
     				city : '',
     				state : '',
     				country : '',
     				phoneNumber : ''
     		}
     	$scope.postData =function(){
     	 if($scope.clientName && $scope.countryName){
     		$scope.clientDataObj  = {
     			clientId: 0,
	     		clientName : $scope.clientName,
	     		countryId : parseInt($scope.countryName),
	     		Addresses : $scope.finalAddressArray
	     	};
	     	clientPostDataService.postClientData($scope.clientDataObj)
	   //   	.then(function (response) {
				// 	if (response.data)
				// 		return  msg = "Post Data Submitted Successfully!";
				// }, function (response) {
				// 	return  msg = "Service not Exists";   
		  //       })

		}
		else{
			return false;
		}

     	}
     	$scope.addAddress = function(){
     		$scope.addressId ++;
     		var address = {};
     		angular.copy($scope.address,address);
     		$scope.finalAddressArray.push(address);
 
     		$scope.address ={
     				//AddressId : '',
     				street1 : '',
     				street2 : '',
     				zip : '',
     				city : '',
     				state : '',
     				country : '',
     				phoneNumber : ''
     		}
     		$scope.updateAddress();
     		console.log($scope.finalAddressArray);
     	}
      	$scope.removeAddress = function(addrIndex){
   	  		$scope.finalAddressArray.splice(addrIndex, 1);
	    }
	    $scope.editAddress = function(addrIndex){
	    	$scope.finalAddressArray[addrIndex];
	    	//angular.element(document.getElementById("addAddressModal").modal();
	    }
     }
]);
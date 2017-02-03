clientsApp.controller('createClientController' ,['$scope' , 'clientPostDataService',
     function createClientController($scope , clientPostDataService){
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
     		// $scope.address ={
     		// 		AddressId : $scope.addressId,
     		// 		Street1 : $scope.street1,
     		// 		Street2 : $scope.street2,
     		// 		Zip : $scope.zip,
     		// 		City : $scope.city,
     		// 		State : $scope.state,
     		// 		Country : $scope.country,
     		// 		PhoneNumber : $scope.PhoneNumber
     		// }
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
     }
]);
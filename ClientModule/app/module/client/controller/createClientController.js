clientsApp.controller('createClientController' ,['$scope' , 'clientPostDataService','$stateParams','$state',
     function createClientController($scope , clientPostDataService , $stateParams ,$state){
    // all variable declaration
      $scope.finalAddressArray =[];
      $scope.address ={
     				//AddressId : '',
     				Street1 : '',
     				Street2 : '',
     				Zip : '',
     				City : '',
     				State : '',
     				CountryId : 85,
                    CountryName : '',
     				PhoneNumber : ''
     		};
       $scope.finalContactArray =[];
       $scope.contact ={
                    ContactId:0,
     				ContactNumber : '',
     				DesignationId : '',
     				EmailAddress : '',
     				FirstName : '',
     				LastName : '',
     				IsPrimaryContact : '',
     		}
      var clientDataToedit = $state.params.userDataObj;
      $scope.clientDataObj  = {
          clientId: 0,
	      clientName : '',
	      countryId : 85,
          Addresses : $scope.finalAddressArray,
          Contacts : $scope.finalContactArray

      }
      if(clientDataToedit){ //if true then edit page
         $scope.finalAddressArray =clientDataToedit.Addresses;
         $scope.finalContactArray =clientDataToedit.Contacts;
         $scope.clientDataObj  = {
              clientId: clientDataToedit.ClientId,
              clientName : clientDataToedit.ClientName,
              countryId : clientDataToedit.CountryId,
              Addresses : $scope.finalAddressArray,
              Contacts : $scope.finalContactArray
            }
         console.log($scope.clientDataObj);
         }
//      else{
//     	var msg;
//            if($scope.clientName && $scope.countryName){
//
////                $scope.clientDataObj  = {
////                    clientId: 0,
////                    clientName : $scope.clientName,
////                    countryId : parseInt($scope.countryId),
////                    Addresses : $scope.finalAddressArray
////                };
//              }
//            else{
//                return false;
//            }
//
//     	}
      
        $scope.postData =function(){
            console.log($scope.clientDataObj);
            clientPostDataService.postClientData($scope.clientDataObj);
                //   	.then(function (response) {
				// 	if (response.data)
				// 		return  msg = "Post Data Submitted Successfully!";
				// }, function (response) {
				// 	return  msg = "Service not Exists";   
		  //       })
         }
     	$scope.addAddress = function(){
     		var address = {};
     		angular.copy($scope.address,address);
     		$scope.finalAddressArray.push(address);
 
     		$scope.address ={
     				//AddressId : '',
     				Street1 : '',
     				Street2 : '',
     				Zip : '',
     				City : '',
     				State : '',
     				CountryId : 85,
                    CountryName : '',
     				PhoneNumber : ''
     		}
     	}
      	$scope.removeAddress = function(addrIndex){
   	  		$scope.finalAddressArray.splice(addrIndex, 1);
	    }
	    $scope.editAddress = function(addrIndex){
	    	$scope.finalAddressArray[addrIndex];
	    	//angular.element(document.getElementById("addAddressModal").modal();
	    }
        
        //add contacts fnctions
        $scope.addcontacts = function(){
     		var contact = {};
     		angular.copy($scope.contact,contact);
     		$scope.finalContactArray.push(contact);
 
     		$scope.contact ={
                    ContactId:0,
     				ContactNumber : '',
     				DesignationId : '',
     				EmailAddress : '',
     				FirstName : '',
     				LastName : '',
     				IsPrimaryContact : '',
     		}
     	}
        
        $scope.removeContact = function(contactIndex){
   	  		$scope.finalContactArray.splice(contactIndex, 1);
	    }
        
     }
]);
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
                    ClientId:0,
                    ContactId:0,
     				ContactNumber : '',
     				DesignationId : null,
     				EmailAddress : '',
     				FirstName : '',
     				LastName : '',
     				IsPrimaryContact : false,
                    OtherDesignation: ''
     		}
      var clientDataToedit = $state.params.userDataObj;
      $scope.clientDataObj  = {
          clientId: 0,
	      clientName : '',
	      countryId : 85,
          Addresses : $scope.finalAddressArray
      }
      if(clientDataToedit){ //if true then edit page
         $scope.finalAddressArray =clientDataToedit.Addresses;
         $scope.finalContactArray =clientDataToedit.Contacts;
          $scope.finalContactArray.forEach(function(obj) {return obj.ClientId = clientDataToedit.ClientId});//Add ClientId into finalContactArray
         $scope.clientDataObj  = {
              clientId: clientDataToedit.ClientId,
              clientName : clientDataToedit.ClientName,
              countryId : clientDataToedit.CountryId,
              Addresses : $scope.finalAddressArray,
            }
         }
      
        $scope.postData =function(){
            clientPostDataService.postClientData($scope.clientDataObj);
                //   	.then(function (response) {
				// 	if (response.data)
				// 		return  msg = "Post Data Submitted Successfully!";
				// }, function (response) {
				// 	return  msg = "Service not Exists";   
		  //       })
         }
        $scope.postContacts = function(){
            clientPostDataService.postClientContacts($scope.addcontacts());
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
            $scope.contact.ClientId = clientDataToedit.ClientId;
     		var contact = {};
     		angular.copy($scope.contact,contact);
     		$scope.finalContactArray.push(contact);
            return contact;
            
     		$scope.contact ={
                    ClientId:0,
                    ContactId:0,
     				ContactNumber : '',
     				DesignationId : '',
     				EmailAddress : '',
     				FirstName : '',
     				LastName : '',
     				IsPrimaryContact : false,
                    OtherDesignation: ''
     		}
            console.log(contact);
     	}
        
        $scope.removeContact = function(contactIndex){
   	  		$scope.finalContactArray.splice(contactIndex, 1);
	    }
        
     }
]);
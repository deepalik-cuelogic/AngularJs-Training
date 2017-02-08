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
       var myEl = angular.element( document.querySelector( '#contactTabli'));
            myEl.addClass('display-none');
         
      if(clientDataToedit){ //if true then edit page
        var myEl = angular.element( document.querySelector( '#contactTabli'));
            myEl.removeClass('display-none');
          
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
          if($scope.clientDataObj.clientName && $scope.clientDataObj.countryId){
            clientPostDataService.postClientData($scope.clientDataObj).then(function (response) {
				 if (response.data)
				 		alert("Client Created Successfully");
                        $state.go('clients')
				 }, function (response) {
				 	alert("Invalid data") ; 
		         })
           }
         }
        $scope.postContacts = function(){
          if($scope.contact.FirstName && $scope.contact.LastName && $scope.contact.EmailAddress && $scope.contact.OtherDesignation){
              var contact = $scope.addcontacts();
            clientPostDataService.postClientContacts(contact).then(function (response) {
				 if (response.data){
                    if(response.data.Status.Messages[0]=="Contact updated successfully."){
                     for(var i = 0; i < $scope.finalContactArray.length; i++) {
                        if ($scope.finalContactArray[i].ContactId == contact.ContactId) {
                           $scope.finalContactArray[i] = contact;
                            break;
                        }
                            
                    }}
                     else{
                     $scope.finalContactArray.push(contact);
                    }
                 }
                 alert("Contact created successfully");
                       // $scope.finalContactArray.push($scope.addcontacts());
                 angular.element( document.querySelector( '#contactForm')).removeClass("ng-submitted");
				 }, function (response) {
				 	alert("Invalid request") ; 
                    angular.element( document.querySelector( '#contactForm')).removeClass("ng-submitted");
		         })
           }
            $scope.contact ={}
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
	    	angular.element(document.getElementById("addAddressModal")).addClass('in').css('display', 'block');
	    }
        
        //add contacts functions
        $scope.addcontacts = function(){
            $scope.contact.ClientId = clientDataToedit.ClientId;
     		var contact = {};
     		angular.copy($scope.contact,contact);
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
     	}
        //function to remove contacts   
        $scope.removeContact = function(contactIndex){	
            var contactToDelete ={
                ClientId: $scope.finalContactArray[contactIndex].ClientId,
                ContactId: $scope.finalContactArray[contactIndex].ContactId
            }
            clientPostDataService.deleteClientContacts(contactToDelete).then(function (response) {
				 if (response.data)
				 		alert("Contact deleted successfully");
				 }, function (response) {
				 	alert("Invalid request") ; 
		         })
            $scope.finalContactArray.splice(contactIndex, 1);
           
	    }
        //edit contact
        $scope.editContact = function(addrIndex){
            $scope.contact ={
                    ClientId:$scope.finalContactArray[addrIndex].ClientId,
                    ContactId:$scope.finalContactArray[addrIndex].ContactId,
     				ContactNumber : $scope.finalContactArray[addrIndex].ContactNumber,
     				DesignationId : '',
     				EmailAddress : $scope.finalContactArray[addrIndex].EmailAddress,
     				FirstName : $scope.finalContactArray[addrIndex].FirstName,
     				LastName : $scope.finalContactArray[addrIndex].LastName,
     				IsPrimaryContact : $scope.finalContactArray[addrIndex].IsPrimaryContact,
                    OtherDesignation: $scope.finalContactArray[addrIndex].OtherDesignation
     		}
	    	
        }
     }
]);
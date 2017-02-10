clientsApp.controller('createClientController' ,['$scope' , 'clientPostDataService','$stateParams','$state','$timeout',
     function createClientController($scope , clientPostDataService , $stateParams ,$state ,$timeout){
    // all variable declaration
      $scope.finalAddressArray =[];
      $scope.address ={
     				AddressId : 0,
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
     		};
               $scope.contact.IsPrimaryContact = false;
      var clientDataToedit = $state.params.userDataObj;  
      $scope.clientDataObj  = {
          clientId: 0,
	      clientName : '',
	      countryId : '',
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
              countryId : clientDataToedit.CountryId.toString(),
              Addresses : $scope.finalAddressArray,
            }
             if($scope.clientDataObj.countryId >10 ){
                $scope.clientDataObj.countryId = Math.ceil(clientDataToedit.CountryId/10).toString();
             }
         }
       
        
        $scope.postData =function(){
          if($scope.clientDataObj.clientName && $scope.clientDataObj.countryId){
            clientPostDataService.postClientData($scope.clientDataObj).then(function (response) {
				 if (response.data)
				     alert(response.data.Status.Messages[0]);
                     //alert("Client Created");
                        $state.go('clients')
				 }, function (response) {
				 	alert(response.data.Messages[0]) ; 
		         })
           }
         }
        $scope.postContacts = function(){
          if($scope.contact.FirstName && $scope.contact.LastName && $scope.contact.EmailAddress && $scope.contact.OtherDesignation){
            var contact = $scope.addcontacts();
            clientPostDataService.postClientContacts(contact).then(function (response) {
                
				 if (response.data){
                    angular.element(document.querySelector('#addContact')).attr('value','Add Contact');
                    if(response.data.Status.Messages[0]=="Contact updated successfully."){
                     for(var i = 0; i < $scope.finalContactArray.length; i++) {
                        if ($scope.finalContactArray[i].ContactId == contact.ContactId) {
                           $scope.finalContactArray[i] = contact;
                            break;
                        }    
                        }
                        alert("Contact updated");
                    }
                     else{
                     contact.ContactId = response.data.Data.ContactId;
                     
                     $scope.finalContactArray.push(contact);
                     alert("Contact created"); 
                     
                     $scope.contactform.$setPristine();
                     $scope.contactform.$setUntouched();
                     //$state.go('createClient.contact')
                    
                    }
                     $scope.contact ={};
                     $timeout(function () {
                       angular.element( document.querySelectorAll( '#contactForm input.submitted')).removeClass('submitted');
                       angular.element( document.querySelectorAll( '#contactForm select.submitted')).removeClass('submitted');
                       angular.element( document.querySelectorAll( '#contactForm input')).next().addClass('ng-hide');
                       angular.element( document.querySelectorAll( '#contactForm select')).next().addClass('ng-hide');
                    });
                 }
                     // $scope.finalContactArray.push($scope.addcontacts());
                
				 }, function (response) {
                    //angular.element( document.querySelector( '#contactForm')).removeClass("ng-submitted");
				 	alert(response.data.Messages[0]) ; 
                    
		         })
           }
            
          }
        
     	$scope.addAddress = function(){
         if($scope.address.Street1 && $scope.address.Street2 && $scope.address.Zip && $scope.address.PhoneNumber){
     		var address = {};
     		angular.copy($scope.address,address);
            var addrToReplace;
            $scope.finalAddressArray.forEach( function( addr,i ){
                  if( addr.AddressId === address.AddressId ){
                    addrToReplace = {"address":addr , "addrIndex" : i};
                  }
            });
            
            if(addrToReplace){
                $scope.finalAddressArray[addrToReplace.addrIndex] = address;
                $("#addAddressModal").modal("hide");
                alert("Address updated");
            }
            else{
     		 $scope.finalAddressArray.push(address);
                $("#addAddressModal").modal("hide");
                alert("Address added");
            }
            //$scope.finalAddressArray.push(address);
     		$scope.address ={
     				AddressId : 0,
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
     	}
      	$scope.removeAddress = function(addrIndex){
   	  		$scope.finalAddressArray.splice(addrIndex, 1);
            alert("Address removed..");
	    }
	    $scope.editAddress = function(addrIndex){
	    	$scope.finalAddressArray[addrIndex];
            angular.element(document.querySelector('#addAddress')).click();
            $scope.address ={
     				AddressId : $scope.finalAddressArray[addrIndex].AddressId,
     				Street1 : $scope.finalAddressArray[addrIndex].Street1,
     				Street2 : $scope.finalAddressArray[addrIndex].Street2,
     				Zip : $scope.finalAddressArray[addrIndex].Zip,
     				City : $scope.finalAddressArray[addrIndex].City,
     				State : $scope.finalAddressArray[addrIndex].State,
     				CountryId : 85,
                    CountryName : $scope.finalAddressArray[addrIndex].CountryName,
     				PhoneNumber : $scope.finalAddressArray[addrIndex].PhoneNumber
     		}
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
				 		alert("Contact deleted");
                        $scope.finalContactArray.splice(contactIndex, 1);
				 }, function (response) {
				 	alert(response.data.Messages[0]) ; 
		         })
                contactToDelete={}
                //$state.go('createClient.contact'); 
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
            angular.element(document.querySelector('#addContact')).attr('value','update');
	    	
        }
        
        //open input file element
        $scope.clickFileInput = function() {
            setTimeout(function() {
                document.getElementById('uploadLogo').click();
            }, 0);
        };

        $scope.uploadFile = function(files) {
            var imgReader = new FormData();
            var file = imgReader.get('file');
            var reader = new FileReader();
             imgReader.append('file', files[0]);
             imgReader.append('ClientId', 428);
            clientPostDataService.uploadLogo(imgReader).then(function (response) {
                
				 if (response.data){
                     alert("success");
                 }
            }, function (response) {
				 	alert("dammmm") ; 
                    
		         })
                                                            
            reader.readAsDataURL(files[0]);
           reader.onload   = function (e) {
//             //$scope.CompanyLogo = e.target.result;
            alert('inside');
           angular.element(document.querySelector('#imagePreview')).attr('src',e.target.result);
        }
     }
     }
]);
clientsApp.factory('clientPostDataService' , function($http) {
 return{
	postClientData : function(data){
		$http.post('http://dev-gahp-clients.azurewebsites.net/api/client/saveClientInfo', data);
			
		},
    postClientContacts : function(data){
		  	$http.post('http://dev-gahp-clients.azurewebsites.net/api/client/CreateContact', data);
		  }
	}
})
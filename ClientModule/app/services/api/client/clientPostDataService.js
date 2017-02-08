clientsApp.factory('clientPostDataService' , function($http) {
 return{
	postClientData : function(data){
		return $http.post('http://dev-gahp-clients.azurewebsites.net/api/client/saveClientInfo', data);
			
		},
    postClientContacts : function(data){
		  	return $http.post('http://dev-gahp-clients.azurewebsites.net/api/client/CreateContact', data);
		  },
	
    deleteClientContacts : function(data){
		  	return $http.post('http://dev-gahp-clients.azurewebsites.net/api/client/Deletecontact', data);
		  },
    postClientArchive : function(data){
            return $http.post('http://dev-gahp-clients.azurewebsites.net/api/client/Archive', data);
    },
    postClientActive : function(data){
            return $http.post('http://dev-gahp-clients.azurewebsites.net/api/client/Activate', data);
    }

 }
    
 
})
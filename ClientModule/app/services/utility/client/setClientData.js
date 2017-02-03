clientsApp.factory('setClientDataService' , function() {
	var setDataObj;

	return{
		//setter 
		setData : function(data){
			 setDataObj = data;
		},
		//getter
		getData : function(params){
			return setDataObj.Data[params.Action] ;
		}

	}
});
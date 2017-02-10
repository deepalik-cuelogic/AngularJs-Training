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
		},
        update : function(params){
            if(params.Action == "Active"){
                setDataObj.Data[params.Action].forEach(function(obj,i) 
                    {
                        if(obj.ClientId === params.Id){
                            setDataObj.Data[params.Action].splice(i,1);
                            setDataObj.Data["Archive"].push(obj);
                        }
                    });
            }
            else{
                setDataObj.Data[params.Action].forEach(function(obj,i) 
                    {
                        if(obj.ClientId === params.Id){
                            setDataObj.Data[params.Action].splice(i,1);
                            setDataObj.Data["Active"].push(obj);
                        }
                    });
            }
            //Remove id from label and insert it into other array
        }
        

	}
});
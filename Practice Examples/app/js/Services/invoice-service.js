'use strict';

moduleApp.factory('invoiceService' , function(){
    var currency = ['USD' , 'EUR' , 'CNY'];
    var usdToForeignRates = {
             USD : 1,
             EUR : 0.74,
             CNY : 6.09
         };
    // function to covert current currency value in all currency    
    var convert = function(amount , incurr , outcurr){
            
            return  amount * usdToForeignRates[incurr]/ usdToForeignRates[outcurr];
    }
    
    return {
        currency : currency,
        convert : convert 
    };
            
});
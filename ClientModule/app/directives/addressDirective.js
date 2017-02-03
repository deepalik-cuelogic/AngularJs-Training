clientsApp.directive('addAddress', function($compile){
  return {
    restrict: 'AE',
    controller : 'createClientController',
    // scope:{
    //   address : "@"
    // },
    link: function(scope, element, attrs){
     scope.updateAddress = function() {
      var html = '<div class="address-div" ng-repeat="addrs in finalAddressArray" data-id="{{addrs.addressId}}">'+
                    '<address>'+
                      '<span> {{addrs.street1}} </span>,<span> {{addrs.street2}} </span><br>'+
                      '<span> {{addrs.city}} </span>,<span> {{addrs.state}} </span><br>'+
                      '<span> {{addrs.country}} </span><span> {{addrs.zip}} </span><br>' +
                      '<abbr title="Phone">Phone: {{addrs.phoneNumber}} ' +
                    '</address>' +
                    '<span class="address-icons">' +
                      '<a href="#" title="remove" ng-click="removeAddress($index)"><i class="fa fa-times" aria-hidden="true"></i></a>' +
                      '<a href="#" title="edit"><i class="fa fa-pencil" aria-hidden="true"></i></a>' +
                    '</span>'+
                   '</div>';
      compiledElement = $compile(html)(scope);
      
      //element.on('click', function(event){
        var pageElement = angular.element(document.getElementById("addedAddress"));
        pageElement.empty();
        pageElement.append(compiledElement);
      //})
    }
    
  }
}
});
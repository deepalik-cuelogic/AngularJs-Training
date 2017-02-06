clientsApp.directive('addContact', function($compile){
  return {
    restrict: 'AE',
    controller : 'createClientController',
    templateUrl: 'app/module/client/view/contacts.html',
    replace:true
  }
});
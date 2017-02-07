clientsApp.controller('addressModalController' ,function ($scope, $modalInstance, item ,$controller,$modal) {
                    $controller('createClientController', { $scope: $scope }); 
                    console.log($scope.finalAddressArray);
                    $scope.item = item;

                    $scope.dismiss = function () {
                        $modalInstance.dismiss();
                    };

                    $scope.close = function () {                    
                         $modalInstance.close($scope.item);                       
                    };
                    $scope.addeditAddress = function(){
                           // $scope.addAddress();
                            if($scope.address.Street1 && $scope.address.Street2 && $scope.address.Zip){
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
                            console.log($scope.address);
                            console.log($scope.finalAddressArray);
                        }
                }
 );
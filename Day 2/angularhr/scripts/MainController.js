/**
 * Created by user on 6/24/2016.
 */
hrApp.controller('MainController',['$rootScope','$scope',
    function($rootScope,$scope){
        $scope.someValue = "someValue";
        console.log($scope.someValue);
    }]);
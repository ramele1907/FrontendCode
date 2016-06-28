/**
 * Created by user on 6/28/2016.
 */

finalApp.controller('FormsController',['$scope',function ($scope) {
    $scope.submit = function () {
        if($scope.myForm.$valid){
            window.alert("submitted");
        }
    }
}]);
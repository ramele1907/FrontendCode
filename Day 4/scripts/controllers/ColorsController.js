/**
 * Created by user on 6/28/2016.
 */
finalApp.controller('ColorsController', ['$scope', function($scope) {
    $scope.rezultat;
    $scope.colors = [
        {
            "text" : "muted",
            "class": "text-muted",
            "type": "strong"
        },
        {
            "text" : "primary",
            "class": "text-primary",
            "type": "strong"
        },
        {
            "text" : "success",
            "class": "text-success",
            "type": "strong"
        },
        {
            "text" : "info",
            "class": "text-info",
            "type": "boring"
        },
        {
            "text" : "warning",
            "class": "text-warning",
            "type": "boring"
        },
        {
            "text" : "danger",
            "class": "text-danger",
            "type": "boring"
        }
    ];
    $scope.changeColor = function(){
            $scope.rezutat = $scope.modelVar;
            console.log($scope.rezutat);
    };
//    $scope.text = $scope.colors[0];
    
}]);



hrApp.controller('MathController', ['$scope','MathService', function($scope,MathService){
    
    $scope.calculate = function() {
        $scope.op1 = MathService.add($scope.a, $scope.b);
        $scope.op2 = MathService.substract($scope.a, $scope.b);
        $scope.op3 = MathService.multiply($scope.a, $scope.b);
        $scope.op4 = MathService.divide($scope.a, $scope.b);
//        TODO #8 calculate op1, op2, op3, op4

//        TODO #13 refactor your calculations using MathService
    }

}]);

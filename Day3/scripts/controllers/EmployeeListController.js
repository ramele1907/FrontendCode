hrApp.controller('EmployeeListController', ['$scope', '$http', '$location', 'commonResourcesFactoryBackup',
    function ($scope, $http, $location, commonResourcesFactoryBackup) {
// TODO #HR2 - inject commonResourcesFactory

        $scope.employee = [];
       
        $http.get(commonResourcesFactoryBackup.findAllEmployeesUrl )
        .success(function(data, status, headers, config) {
                $scope.employee = data;
            })



        $scope.viewEmployee = function (employeeId) {
            $location.url('/employeeview/' + employeeId);
        };

}]);
hrApp.controller('EmployeeViewController', ['$scope', '$http', '$routeParams', '$location','commonResourcesFactoryBackup',
    function($scope, $http, $routeParams, $location, commonResourcesFactoryBackup) {

        $scope.employee = {};


        // TODO #HR6 get employee by id
        var id = $routeParams.employeeid;
        $http.get(commonResourcesFactoryBackup.findOneEmployeesUrl + id)
            .success(function(data, status, headers, config) {
                $scope.employee = data;
            })



        $scope.back = function() {
            // TODO back to Employee List page

        }

    }]);
hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactoryBackup',
    'DepartmentsService', 'JobService', 'EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactoryBackup, DepartmentsService,
        JobService, EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5
        DepartmentsService.findAllDepartaments()
            .then(
                function (res) {
                    $scope.departments = res.data;
                }
            );
        JobService.findAllJobs()
            .then(
                function (res) {
                    $scope.jobs = res.data;
                    console.log($scope.jobs[0]);
                }
            );
        EmployeeService.findAllManagers()
            .then(
                function (res) {
                    $scope.managers = res.data;
                }
            );
        EmployeeService.findById($routeParams.employeeId)
            .then(
                function (res) {
                    $scope.employee = res.data;
                }
            );
        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */

        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.editEmployeeUrl, method: 'PUT', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);
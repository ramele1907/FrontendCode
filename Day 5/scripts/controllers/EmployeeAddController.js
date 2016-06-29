hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactoryBackup',
    'EmployeeService', 'JobService', 'DepartmentsService',
    function($scope, $http, $location, CommonResourcesFactoryBackup, EmployeeService, JobService, DepartmentsService) {
        $scope.employee = {};
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR1

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };
        DepartmentsService.findAllDepartaments()
            .then(
                function (res) {
                    $scope.departments = res.data;
                    console.log($scope.departments[0]);
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

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactoryBackup.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;
}]);
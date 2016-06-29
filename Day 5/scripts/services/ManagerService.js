/**
 * Created by user on 6/29/2016.
 */
hrApp.service('ManagerService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findById: function (managerId) {
                return $http.get(CommonResourcesFactoryBackup.findOneEmployeeUrl + managerId)
                    .success(function (data) {
                        return data;
                    })
            },
            findAllManagers: function() {
                return $http.get(CommonResourcesFactoryBackup.findAllEmployeesUrl)
                    .success(function (data) {
                        return data;
                    })
            }
        }
    }]
);
/**
 * Created by user on 6/29/2016.
 */
hrApp.service('DepartmentsService', ['$http', 'CommonResourcesFactoryBackup', function ($http, CommonResourcesFactoryBackup) {
        return {
            findById: function (departmentId) {
                return $http.get(CommonResourcesFactoryBackup.findOneDeUrl + departmentId)
                    .success(function (data) {
                        return data;
                    })
            },
            findAllDepartaments: function() {
                return $http.get(CommonResourcesFactoryBackup.findAllDepartmentsUrl)
                    .success(function (data) {
                        return data;
                    })
            }
        }
    }]
);
var finalApp = angular.module('finalApp',['ngRoute']);
finalApp.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/colors', {
        templateUrl: '../views/colors.html',
        controller: 'ColorsController'
    })
    .when('/forms', {
        templateUrl: '../views/form.html',
        controller: 'FormsController'
    });
}]);
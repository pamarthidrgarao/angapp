(function() {
    var app = angular.module('app', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider) {
        // body...
        $urlRouterProvider.otherwise('/login');

        var login = {
            name: 'login',
            url: '/login',
            templateUrl: 'assets/login/login.tmp.html',
            controller: 'LoginController'
        }

        var dashboard = {
            name: 'dashboard',
            url: '/dashboard',
            templateUrl: 'assets/dashboard/dashboard.tmp.html'
        }

        $stateProvider.state(login);
        $stateProvider.state(dashboard);

    });
})()

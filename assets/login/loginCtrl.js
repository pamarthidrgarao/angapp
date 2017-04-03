(function() {
    angular.module("app").controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$scope'];

    function LoginController($location, $scope) {
        var vm = this;

        $scope.login = function login() {
            
            if ($scope.username === $scope.password) {
                $location.path('dashboard');
            } else {
                console.log("Eor");
            }
        }

    }
})();

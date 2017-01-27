(function(){
   
    angular.module('myApp',['ui.router'])
    .config(['$stateProvider',
        '$urlRouterProvider',
        function($stateProvider,$urlRouterProvider){
            $urlRouterProvider.otherwise('/login');
            $stateProvider
            .state('login',{
                url:'/login',
                templateUrl:'template/login.html',
                controller: 'app.logincontroller',
                controllerAs: 'LoginCtrl'
            })
            .state('deshboard',{
                url:'/deshboard',
                templateUrl:'template/deshboard.html'
            })
        }
    ]);
})();


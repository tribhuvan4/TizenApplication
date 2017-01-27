(function(){
    'use strict';
    angular.module('myApp')
    .controller('app.logincontroller', LoginController);
    LoginController.$inject = [
        '$state'
    ];
    function LoginController($state){
        var vm = this;
        this.submitForm = submitLoginForm;

        function submitLoginForm(){
            if(vm.userName === 'test' && vm.password === 'test@123'){
                $state.go('deshboard');
            }
            else{
                alert('please enter correct username and password');
            }
        }
    }
})();
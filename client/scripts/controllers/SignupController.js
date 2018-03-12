(function() {

    'use strict';

    angular.module("kirana")
        .controller("SignupController", SignupController);

    SignupController.$inject = ['$state','MainService', '$mdToast','ToasterService', '$cookieStore'];

    function SignupController($state, MainService, $mdToast, ToasterService, $cookieStore) {
        var ctrl = this;
        ctrl.userDetails = {};
        ctrl.userDetails['auth'] = "0" ;

        ctrl.signup = function() {
            MainService.signup(ctrl.userDetails).then(function(response){
                ToasterService.show('Email sent for verification..')
            }, function(err) {
                ToasterService.show(err.data.message)
            })
        }

        ctrl.goTo = function(state) {
            $state.go(state)
        }

        ctrl.change_password =function() {
            var passtoken  = $cookieStore.get('passtoken')
            var postData = {
                'password' : ctrl.newPassword,
                'token' : passtoken
            }
            MainService.changePassword(postData).then(function(response) {
                ToasterService.show('password changed successfully');
                $state.go('login')     
            },function(err) {
                ToasterService.show(err.data.message)
            })
        }
    }


})();
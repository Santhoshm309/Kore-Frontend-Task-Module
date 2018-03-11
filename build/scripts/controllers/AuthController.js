(function() {

    'use strict';

    angular.module("kirana")
        .controller("AuthController", AuthController);

    AuthController.$inject = ['$state','MainService', '$mdToast','ToasterService', '$cookieStore'];

    function AuthController($state, MainService, $mdToast, ToasterService, $cookieStore) {
        var ctrl = this;
        ctrl.userDetails = {};
        ctrl.isOtpSent = false;
        ctrl.email = function() {
            var token = $cookieStore.get('token')
            console.log(token)
            var payload = {
                'token' : token,
                'auth_type' : 1
            }
            MainService.email_auth(payload).then(function(response) {
                ToasterService.show(response.data.message)
                ctrl.isOtpSent = true;
            },function(err) {
                ToasterService.show(err.data.message)
            })
        }

        ctrl.check_otp = function() {
            var token = $cookieStore.get('token')
            MainService.check_otp({'totp': ctrl.otp, 'token' : token}).then(function(response){
                  $cookieStore.put('token', response.data.data.token);
                  ToasterService.show('OTP entered is Correct');  
                  ctrl.goTo('profile')
            },function(err) {
                ToasterService.show(err.data.message)
            })
        }

        ctrl.goTo = function(state) {
            $state.go(state)
        }
    }


})();
(function() {

    'use strict';

    angular.module("kirana")
        .controller("LoginController", LoginController);

    LoginController.$inject = ['$state','MainService', '$mdToast','ToasterService', '$cookieStore'];

    function LoginController($state, MainService, $mdToast, ToasterService, $cookieStore) {
        var ctrl = this;
        ctrl.userDetails = {};
        ctrl.forgot_password = false;

        ctrl.login = function() {
            MainService.login(ctrl.userDetails).then(function(response){
                var token = response.data.data.token;
                console.log(response)
                var auth = response.data.data.auth
                $cookieStore.put('token',token);
                
                if(auth== false)   
                    ToasterService.show('Login Successful');

                else {
                    ToasterService.show('Directing to 2FA screen');
                    $state.go('auth')
                }

                    


            }, function(err) {
                ToasterService.show(err.data.message)
            })
        }

        ctrl.send_email = function() {
              var postData = {
                'email' : ctrl.email
              }
              MainService.sendEmail(postData).then(function(reponse) {
                   ToasterService.show('Link sent to email') 
              },function(err) {
                ToasterService.show(err.data.message)
            })  
        }

        ctrl.goTo = function(state) {
            $state.go(state)
        }
    }


})();
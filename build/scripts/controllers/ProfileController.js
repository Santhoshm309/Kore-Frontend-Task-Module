(function() {

    'use strict';

    angular.module("kirana")
        .controller("ProfileController", ProfileController);

    ProfileController.$inject = ['$state','MainService', '$mdToast','ToasterService', '$cookieStore'];

    function ProfileController($state, MainService, $mdToast, ToasterService, $cookieStore) {
        var ctrl = this;
        ctrl.userDetails = {};

        ctrl.signout = function () {
            MainService.signout({'token' : $cookieStore.get('token')}).then(function(response){
                
                $cookieStore.remove('token')
                ToasterService.show('Signout Successfull')
                ctrl.goTo('login')    
            }, function(err){
                ToasterService.show(err.data.message)
            })
        }

        ctrl.goTo = function(state) {
            $state.go(state)
        }
    }


})();
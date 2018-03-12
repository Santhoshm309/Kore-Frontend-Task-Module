(function() {

    'use strict';

    angular.module("kirana")
        .controller("PasswordController", PasswordController);

    PasswordController.$inject = ['$state','MainService', '$mdToast','ToasterService', '$cookieStore','$location'];

    function PasswordController($state, MainService, $mdToast, ToasterService, $cookieStore,$location) {
          var ctrl = this;
          var q = $location.search()['token']

          MainService.verifyPasswordToken(q).then(function(response) {
               ToasterService.show('Token verified')
               $cookieStore.put('passtoken', q)
               $state.go('change_password') 
          }, function(err) {
            ToasterService.show(err.data.message);
          }); 
    }


})();
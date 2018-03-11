(function() {

    'use strict';

    angular.module("kirana")
        .controller("VerifyController", VerifyController);

    VerifyController.$inject = ['$state','MainService', '$mdToast','ToasterService', '$cookieStore','$location'];

    function VerifyController($state, MainService, $mdToast, ToasterService, $cookieStore,$location) {
          var ctrl = this;
          var q = $location.search()['link']

          MainService.verifyEmail(q).then(function(response) {
               ToasterService.show('Email Confirmed... REdirecting to login')
               $state.go('login') 
          }, function(err) {
            ToasterService.show(err.data.message);
          }) 
    }


})();
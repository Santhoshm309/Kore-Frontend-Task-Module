(function() {

    angular.module("kirana")
        .factory("MainService", MainService);
    MainService.$inject = ['$http'];

    function MainService($http, HttpService) {

        // var BASE_URL = 'https://server.kirana-pyramid.tk/api/';
        var BASE_URL = 'http://localhost:6543/';

        var service = {};
        service.login = Login;
        service.email_auth = emailAuth;
        service.check_otp = checkOtp;
        service.signout = signout;
        service.signup = signup;
        service.verifyEmail = verifyEmail;
        return service;

        function signout(postData) {
            return $http.post(BASE_URL + 'signout',postData);
        }

        function verifyEmail(link) {
            return $http.get(BASE_URL + 'verify?link='+link);   
        }

        function signup(postData) {
            return $http.post(BASE_URL + 'signup',postData);
        }

        function Login(postData) {
            return $http.post(BASE_URL + 'login',postData);
        }

        function checkOtp(postData) {
            return $http.post(BASE_URL + 'check-otp',postData);   
        }

        function emailAuth(postData) {
            return $http.post(BASE_URL + 'send-otp',postData);   
        }

    }

})();
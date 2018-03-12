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
        service.changePassword  = changePassword;
        service.sendEmail = sendEmail;
        service.verifyPasswordToken = verifyPasswordToken;
        return service;

        function signout(postData) {
            return $http.post(BASE_URL + 'signout',postData);
        }

        function changePassword(postData) {
            return $http.post(BASE_URL + 'change-pass',postData);   
        }

        function verifyPasswordToken(token) {
            return $http.get(BASE_URL + 'pass-token?token='+token);
        }

        function sendEmail(postData) {
            return $http.post(BASE_URL + 'pass-token',postData);      
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
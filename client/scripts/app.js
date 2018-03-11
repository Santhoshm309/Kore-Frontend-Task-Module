(function(){

    'use strict';

    var states = [
        {
            name: 'login',
            state: {

                url: '/login',
                templateUrl: '../views/login.html',
                data: {
                    text : 'Login',
                    visible: false
                }
            }

        },
        {
            name: 'signup',
            state: {

                url: '/signup',
                templateUrl: '../views/signup.html',
                data: {
                    text : 'Signup',
                    visible: false
                }
            }

        },

        {
            name: 'auth',
            state: {

                url: '/auth',
                templateUrl: '../views/auth.html',
                data: {
                    text : 'Authenticate',
                    visible: false
                }
            }

        },


        {
            name: 'profile',
            state: {

                url: '/profile',
                templateUrl: '../views/profile.html',
                data: {
                    text : 'Profile',
                    visible: false
                }
            }

        },

        {
            name: 'verify',
            state: {

                url: '/verify?link',
                controller: 'VerifyController',
                data: {
                    text : 'Verify',
                    visible: false
                }
            }

        }
    ];

  
    var app = angular.module('kirana', [
        'ui.router',
        'ngMaterial',
        'ngCookies',
        'ngAnimate',
        'angular-loading-bar'
    ])

        // .run(
        //     function($location, $rootScope, $state, $cookies) {
        //         $rootScope.$on('$locationChangeStart', function (event, next, current, fromState, toState) {
        //             var authUrl = [
        //                 "http://localhost:3030/#",
        //                 "http://localhost:3030",
        //             ];
        //             var url = "";
        //             var index = -1, itr;
        //             for (itr = 0; itr < authUrl.length; itr++) {
        //                 index = next.indexOf(authUrl[itr]);
        //                 if (index !== -1) {
        //                     url = authUrl[itr];
        //                     break;
        //                 }
        //             }
        //             var currentUrl = current.replace(url, "");
        //             var nextUrl = next.replace(url, "");
        //             console.log("CurrentUrl - " + currentUrl);
        //             console.log("nextUrl - " + nextUrl);
        //             if ($cookies.get('token')) {
        //                 //    console.log("Setting User Details" + JSON.stringify(userDetails));
        //                 if (nextUrl != '/login' || nextUrl!= '/auth') {
        //                     $location.path(nextUrl);
        //                 }
        //                 else if (currentUrl != '/') {
        //                     $location.path(currentUrl);
        //                 }
        //                 else {
        //                     $location.path('/login');
        //                 }
        //             }
        //         })
        //     })

        .config(function($stateProvider, $urlRouterProvider,$locationProvider) {
              
            
            
            $urlRouterProvider.otherwise('/login');

            angular.forEach(states, function(state) {
                $stateProvider.state(state.name, state.state);
            });
        });


})();
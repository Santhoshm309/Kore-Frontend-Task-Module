(function(){

    'use strict';
    angular.module('kirana')
        .factory('ToasterService', ToasterService);
    ToasterService.$inject = ['$mdToast'];
    function ToasterService($mdToast) {

        var toast = {};

        toast.show = Show;
        return toast;
        function Show(message) {
            var toast = $mdToast.simple()
                .textContent(message)
                .position('down right');
           return $mdToast.show(toast);
        }

    }


})();
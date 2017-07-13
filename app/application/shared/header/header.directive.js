'use strict'

angular.module('movieApp.header.directive',[]).directive('movieNavbar', function(){
    return {
        restrict: 'E',
        templateUrl: 'application/shared/header/header.html',
        link: function (scope, elem, attrs, state) {
            // ..
        }
    }
});
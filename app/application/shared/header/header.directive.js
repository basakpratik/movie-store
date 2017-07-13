'use strict'

angular.module('movieApp.header.directive',[]).directive('navbar', function(){
    return {
        restrict: EA,
        templateUrl: 'application/shared/header/header.html',
        link: function (scope, elem, attrs, state) {
            // ..
        }
    }
});
'use strict'

angular.module('movieApp.header.directive',[]).directive('movieNavbar', function(MoviesService){
    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'application/shared/header/header.html',
        link: function (scope, elem, attrs, state) {
            // ..
        },
        controller: 'HeaderController'
    }
});
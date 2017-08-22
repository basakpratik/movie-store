'use strict'

angular.module('movieApp.sort.directive',[]).directive('sortData', function(MoviesService){
    return {
        restrict: 'EA',
        replace: 'false',
        templateUrl: 'application/shared/sort/sort.html',
        link: function (scope, elem, attrs, state) {
            // ..
        },
        controller: 'SortController'
    }
});
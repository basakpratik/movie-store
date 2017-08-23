'use strict'

angular.module('movieApp.sort.directive',[]).directive('sortData', function(MoviesService){
    return {
        restrict: 'EA',
        templateUrl: 'application/shared/sort/sort.html',
        link: function (scope, elem, attrs, state) {
            scope.getmovielist = MoviesService.msGetFilteredMovies();
            scope.getMovieListLength = scope.getmovielist.length;
        },
        controller: 'SortController'
    }
});
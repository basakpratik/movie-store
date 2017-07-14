'use strict';

angular.module('movieApp.movies.filter', []).filter('startFrom', function() {
    return function(input, start) {
        start += start;
        start = parseInt(start);
        return input.slice(start);
    }
});
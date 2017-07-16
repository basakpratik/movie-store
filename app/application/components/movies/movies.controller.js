'use strict';

angular.module('movieApp.movies.controller', []).controller('MoviesController',
['$scope', '$log', 'MoviesService', function($scope, $log, MoviesService){
    $log.log('Movies Controller.. ');

    $scope.movielist = [];

    /* (function(){
        MoviesService.msGetData().then(function(dataparam){
            //$log.log('dataparam->'+JSON.stringify(dataparam));
            $scope.movielist = dataparam;
        });
    })(); */

    $scope.movielist = MoviesService.msGetFilteredMovies();

}]);
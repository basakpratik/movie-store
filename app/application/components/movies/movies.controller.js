'use strict';

angular.module('movieApp.movies.controller', []).controller('MoviesController',
['$scope', '$log', '$rootScope', 'MoviesService', function($scope, $log, $rootScope, MoviesService){
    $log.log('Movies Controller.. ');

    $scope.movielist = [];

    /* (function(){
        MoviesService.msGetData().then(function(dataparam){
            //$log.log('dataparam->'+JSON.stringify(dataparam));
            $scope.movielist = dataparam;
        });
    })(); */

    $scope.movielist = MoviesService.msGetFilteredMovies();
    $rootScope.overlay = false;

}]);
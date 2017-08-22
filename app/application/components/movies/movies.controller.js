'use strict';

angular.module('movieApp.movies.controller', []).controller('MoviesController',
['$scope', '$log', '$rootScope', 'MoviesService', function($scope, $log, $rootScope, MoviesService){
    $log.log('Movies Controller.. ');

    $scope.showLoadMore = true; $scope.movielist = [];
    const show_per_block = 8;
    var holdValue;

    /* (function(){
        MoviesService.msGetData().then(function(dataparam){
            //$log.log('dataparam->'+JSON.stringify(dataparam));
            $scope.movielist = dataparam;
        });
    })(); */

    $scope.getmovielist = MoviesService.msGetFilteredMovies();
    let getMovieListLength = $scope.getmovielist.length;
    for(let i=0; i<getMovieListLength; i++){
        if(i<show_per_block){
            $scope.movielist.push($scope.getmovielist[i]);
        } else {
            holdValue = i;
            break;
        }
    }
    $rootScope.overlay = false;

    $scope.loadmore = function(){
        if(($scope.getmovielist.length - $scope.movielist.length) < 5){
            $scope.showLoadMore = false;
        }
        for(let i=holdValue; i<getMovieListLength; i++){
            if(i<(holdValue+show_per_block)){
                $scope.movielist.push($scope.getmovielist[i]);
            } else {
                holdValue = i;
                break;
            }
        }
    }

}]);
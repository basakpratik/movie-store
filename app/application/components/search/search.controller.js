'use strict';

angular.module('movieApp.search.controller', []).controller('SearchController',
['$scope', '$log', '$rootScope', 'MoviesService', function($scope, $log, $rootScope, MoviesService){
    $log.log('Search Controller.. ');

    $scope.searchlist = [];

    /* (function(){
        MoviesService.msGetData().then(function(dataparam){
            //$log.log('dataparam->'+JSON.stringify(dataparam));
            $scope.movielist = dataparam;
        });
    })(); */

    $scope.searchlist = MoviesService.msGetSearchedMovies();
    $scope.searchLength = $scope.searchlist.length;

}]);
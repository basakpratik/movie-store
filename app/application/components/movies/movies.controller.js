'use strict';

angular.module('movieApp.movies.controller', []).controller('MoviesController',
['$scope', '$log', 'MoviesService', function($scope, $log, MoviesService){
    $log.log('Movies Controller.. ');

    $scope.movielist = [];

    (function(){
        MoviesService.getData().then(function(dataparam){
            //$log.log('dataparam->'+JSON.stringify(dataparam));
            $scope.movielist = dataparam;

            $scope.currentPage = 0;
            $scope.pageSize = 8;
            $scope.data = [];
            $scope.numberOfPages=function(){
                console.log('->'+$scope.data.length);
                return Math.ceil($scope.data.length/$scope.pageSize);
            }
            for (var i=0; i<$scope.movielist.length; i++) {
                $scope.data.push("Item "+i);
            }
        });
    })();

}]);
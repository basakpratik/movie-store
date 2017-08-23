'use strict'

angular.module('movieApp.sort.controller',[]).controller('SortController',
['$scope', '$log', '$state', '$rootScope', 'MoviesService',
function($scope, $log, $state, $rootScope, MoviesService){
    $log.log('Sort Controller ..');

    $scope.getmovielist = MoviesService.msGetFilteredMovies();
    $scope.getMovieListLength = $scope.getmovielist.length;

    /* for(let i=0; i<$scope.getMovieListLength; i++){
        console.log($scope.getmovielist[i].title_year);
    } */
    $scope.getmovielist.sort(function(a, b){
        return a.title_year - b.title_year;
    })
    console.dir($scope.getmovielist);

    $scope.sortByFunc = function(sortBy){
        //$log.log('sortType: '+$scope.sortType);
        if(sortBy == 'year'){
            if($scope.sortType == 'Oldest-to-Latest'){
                // ..
            } else if($scope.sortType == 'Latest-to-Oldest'){
                // ..
            }
        } else if(sortBy == 'budget'){
            if($scope.sortType == 'Low-to-High'){
                // ..
            } else if($scope.sortType == 'High-to-Low'){
                // ..
            }
        }
        
    }
}]);
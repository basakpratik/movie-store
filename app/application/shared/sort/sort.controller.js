'use strict'

angular.module('movieApp.sort.controller',[]).controller('SortController',
['$scope', '$log', '$state', '$rootScope', 'MoviesService',
function($scope, $log, $state, $rootScope, MoviesService){
    $log.log('Sort Controller ..');

    let getmovielist = MoviesService.msGetFilteredMovies();

    $scope.sortByFunc = function(sortBy){
        //$log.log('sortType: '+$scope.sortType);
        if(sortBy == 'year'){
            if($scope.sortType == 'Oldest-to-Latest'){
                getmovielist.sort(function(a, b){
                    return a.title_year - b.title_year;
                });
            } else if($scope.sortType == 'Latest-to-Oldest'){
                getmovielist.sort(function(a, b){
                    return b.title_year - a.title_year;
                });
            }
        } else if(sortBy == 'budget'){
            if($scope.sortType == 'Low-to-High'){
                getmovielist.sort(function(a, b){
                    return a.budget - b.budget;
                });
            } else if($scope.sortType == 'High-to-Low'){
                getmovielist.sort(function(a, b){
                    return b.budget - a.budget;
                });
            }
        }
        MoviesService.msSetFilteredMovies(getmovielist);
        $state.go('movies', null, {'reload':true});        
    }
}]);
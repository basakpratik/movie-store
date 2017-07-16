'use strict'

angular.module('movieApp.header.directive',[]).directive('movieNavbar', function(MoviesService){
    return {
        restrict: 'E',
        templateUrl: 'application/shared/header/header.html',
        link: function (scope, elem, attrs, state) {
            // ..
        },
        controller: function($scope, $log, $state, $rootScope, MoviesService){
            $scope.genres = ['Action', 'Adventure', 'Fantasy', 'Sci-Fi', 'Romance', 'Animation', 'Comedy', 'Drama', 'History', 'Thriller'];

            $scope.filterMovies = function(genre){
                $log.log('genre->'+genre);
                $rootScope.overlay = true;
                var filteredMovies = [];
                MoviesService.msGetData().then(function(dataparam){
                    //$log.log('dataparam->'+JSON.stringify(dataparam));
                    $scope.movielist = dataparam;
                    for(var idx=0; idx<$scope.movielist.length; idx++){
                        if($scope.movielist[idx].genres.indexOf(genre) > -1){
                            filteredMovies.push($scope.movielist[idx]);
                            MoviesService.msSetFilteredMovies(filteredMovies);
                            //$state.go('movies');
                            $log.log('clicked');
                            $state.go('movies', null, {'reload':true});
                        }
                    }
                });
            }
        }
    }
});
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
                const filteredMovies = [];
                MoviesService.msGetData().then(function(dataparam){
                    //$log.log('dataparam->'+JSON.stringify(dataparam));
                    let movielist = dataparam;
                    for(var idx=0; idx<movielist.length; idx++){
                        if(movielist[idx].genres.indexOf(genre) > -1){
                            filteredMovies.push(movielist[idx]);
                            MoviesService.msSetFilteredMovies(filteredMovies);
                            //$state.go('movies');
                            //$log.log('clicked');
                            $state.go('movies', null, {'reload':true});
                        }
                    }
                });
            }

            $scope.search = function(searchText){
                $rootScope.overlay = true;
                const searchResults = [];
                MoviesService.msGetData().then(function(dataparam){
                    //$log.log('dataparam->'+JSON.stringify(dataparam));
                    $log.log('searching ..' + searchText);
                    let searchlist = dataparam;
                    for(var idx=0; idx<searchlist.length; idx++){
                        if(searchlist[idx].movie_title.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || searchlist[idx].genres.toLowerCase().indexOf(searchText.toLowerCase()) > -1 || searchlist[idx].plot_keywords.toLowerCase().indexOf(searchText.toLowerCase()) > -1){
                            searchResults.push(searchlist[idx]);
                            MoviesService.msSetSearchedMovies(searchResults);
                        } else {
                            $log.log('not found');
                        }
                    }
                    $state.go('search', null, {'reload':true});
                    $rootScope.overlay = false;
                });
            }
        }
    }
});
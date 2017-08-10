'use strict'

angular.module('movieApp.header.controller',[]).controller('HeaderController',
['$scope', '$log', '$state', '$rootScope', 'MoviesService',
function($scope, $log, $state, $rootScope, MoviesService){
    $log.log('HeaderController ..');

    const movie_genres = []; let allgenres = []; $scope.genres = []; var respData;

    /*MoviesService.msGetData().then(function(dataparam){
        let movielist = dataparam;
        for(let idx=0; idx<movielist.length; idx++){
            movie_genres.push(movielist[idx].genres.split('|'));
        }
        //$log.log(movie_genres.join().split(','));
        allgenres = movie_genres.join().split(',');
        for(let i=0; i<allgenres.length; i++){
            $scope.genres.push(allgenres[i]);
            let counter = 0;
            for(let j=0; j<$scope.genres.length; j++){
                if(allgenres[i] == $scope.genres[j]){
                    counter++;
                }
                if(counter > 1){
                    $scope.genres.pop(allgenres[i]);
                }
            }
        }
    });*/

    MoviesService.msGetData().then(function(dataparam){
        $log.log(localStorage.getItem('respData'));
    });

    /* var respCall = function(){
        var respData = localStorage.getItem('respData');
        respData = JSON.parse(respData);
        $scope.genres = respData;
        //$log.log('$scope.genres: '+$scope.genres);
        return respData;
    }

    let respData = respCall();        */     
    //$log.log('respData: '+respData);

    $scope.filterMovies = function(genre){
        //$log.log('genre->'+genre);
        $rootScope.selectedGenre = genre;
        $rootScope.overlay = true;
        const filteredMovies = [];
        MoviesService.msGetData().then(function(dataparam){
            //$log.log('dataparam->'+JSON.stringify(dataparam));
            let movielist = dataparam;
            for(var idx=0; idx<movielist.length; idx++){
                if(movielist[idx].genres.indexOf(genre) > -1){
                    filteredMovies.push(movielist[idx]);
                    MoviesService.msSetFilteredMovies(filteredMovies);
                    //$log.log('clicked');
                    $state.go('movies', null, {'reload':true});
                }
            }
        });
    }

    $scope.search = function(searchText){
        $rootScope.searchTxt = searchText;
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

}]);
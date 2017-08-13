'use strict'

angular.module('movieApp.header.controller',[]).controller('HeaderController',
['$scope', '$log', '$state', '$rootScope', 'MoviesService',
function($scope, $log, $state, $rootScope, MoviesService){
    $log.log('HeaderController ..');

    const movie_genres = []; let allgenres = []; $scope.genres = []; var respData;

    MoviesService.msGetData().then(function(){
        //let movielist = dataparam;
        const storageData = localStorage.getItem('respData');
        let movielist = JSON.parse(storageData);
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
    });

    $scope.filterMovies = function(genre){
        //$log.log('genre->'+genre);
        $rootScope.selectedGenre = genre;
        $rootScope.overlay = true;
        const filteredMovies = [];
        MoviesService.msGetData().then(function(){
            //$log.log('dataparam->'+JSON.stringify(dataparam));
            const storageData = localStorage.getItem('respData');
            let movielist = JSON.parse(storageData);
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
        MoviesService.msGetData().then(function(){
            $log.log('searching ..' + searchText);
            const storageData = localStorage.getItem('respData');
            let searchlist = JSON.parse(storageData);
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
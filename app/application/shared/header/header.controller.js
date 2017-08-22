'use strict'

angular.module('movieApp.header.controller',[]).controller('HeaderController',
['$scope', '$log', '$state', '$rootScope', 'MoviesService',
function($scope, $log, $state, $rootScope, MoviesService){
    $log.log('HeaderController ..');

    var respData; const movie_genres = []; let allgenres = [];
    $scope.genres = []; $scope.showList = false;

    MoviesService.msGetData().then(function(){
        //let movielist = dataparam;
        const storage_data = localStorage.getItem('respData');
        let movielist = JSON.parse(storage_data);
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
            const storage_data = localStorage.getItem('respData');
            let movielist = JSON.parse(storage_data);
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
        $scope.showList = false;
        const searchResults = [];
        MoviesService.msGetData().then(function(){
            $log.log('searching ..' + searchText);
            const storage_data = localStorage.getItem('respData');
            let searchlist = JSON.parse(storage_data);
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

    $scope.autocomplete = function(searchText){
        //$log.log('searchText: '+searchText);
        const search_results = [];
        MoviesService.msGetData().then(function(){
            $scope.autocomResult = [];
            const storage_data = localStorage.getItem('respData');
            let movielist = JSON.parse(storage_data);
            for(var idx=0; idx<movielist.length; idx++){
                if(movielist[idx].movie_title.toLowerCase().indexOf(searchText.toLowerCase()) > -1){
                    search_results.push(movielist[idx]);
                    //$log.log(search_results);
                    $scope.autocomResult.push(movielist[idx]['movie_title']);
                    $scope.showList = true;
                    //MoviesService.msSetSearchedMovies(searchResults);
                } else {
                    $log.log('not found');
                }
            }
            //$state.go('search', null, {'reload':true});
            $rootScope.overlay = false;
        });
    }

    $scope.selectedName = function(selectedMovie){
        $scope.searchText = selectedMovie;
        $scope.showList = false;
    }

}]);
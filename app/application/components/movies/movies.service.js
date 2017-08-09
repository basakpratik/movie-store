'use strict';

angular.module('movieApp.movies.service', []).service('MoviesService',
['$http', '$log', '$q', '$rootScope', function($http, $log, $q, $rootScope){

    var data, accept = 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8';
    var msFilteredMovies = [], msSearchResults = [];
        
    this.msGetData = function(){
        var def = $q.defer();
        var config = {
            'Content-Type': 'application/json',
            'Server': 'Apache/2.4.7 (Ubuntu)',
            'Accept': accept,
            'Accept-Language': 'en-US,en;q=0.5',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Upgrade-Insecure-Requests': 1
        };
        $http({
            url: 'http://starlord.hackerearth.com/movieslisting',
            method: 'get',
            headers: config
        }).then(function callSuccess(response){
            //$log.log('response->'+JSON.stringify(response));
            data = response.data;
            localStorage.setItem('respData', JSON.stringify(data));
            def.resolve(data);
        }, function callError(error){
            def.reject('Error fetching data ..');
        });
        return def.promise;
    }

    this.msSetFilteredMovies = function(filteredMovies){
        msFilteredMovies = filteredMovies;
    }

    this.msGetFilteredMovies = function(){
        //$log.log('msFilteredMovies->'+msFilteredMovies);
        $rootScope.overlay = false;
        return msFilteredMovies;
    }

    this.msSetSearchedMovies = function(searchedMovies){
        msSearchResults = searchedMovies;
    }

    this.msGetSearchedMovies = function(){
        $rootScope.overlay = false;
        //$log.log('msSearchResults: '+JSON.stringify(msSearchResults));
        return msSearchResults;
    }

}]);
'use strict'

angular.module('movieApp', [
    'ui.router', 'movieApp.home', 'movieApp.header', 'movieApp.footer', 'movieApp.movies', 'movieApp.search'
]);

angular.module('movieApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state('home', {
            url: '/home',
            controller: 'HomeController',
            templateUrl: 'application/components/home/home.html'
        });
        $stateProvider.state('movies', {
            url: '/movies',
            controller: 'MoviesController',
            templateUrl: 'application/components/movies/movies.html'
        });
        $stateProvider.state('search', {
            url: '/search',
            controller: 'SearchController',
            templateUrl: 'application/components/search/search.html'
        });
        $urlRouterProvider.otherwise('/');
    }
])
.run(['$state', '$rootScope', 'MoviesService',
    function ($state, $rootScope, MoviesService) {
        // ...
        $rootScope.overlay = false;
        MoviesService.msGetData().then(function(dataparam){
            //let movielist = dataparam;
            localStorage.setItem('movieList', dataparam);
        });
        $state.go('home');
    }

]);
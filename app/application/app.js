'use strict'

angular.module('movieApp', [
    'ui.router', 'movieApp.header', 'movieApp.footer', 'movieApp.movies'
]);

angular.module('movieApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        $stateProvider.state('movies', {
            url: '/movies',
            controller: 'MoviesController',
            templateUrl: 'application/components/movies/movies.html'
        });
        $urlRouterProvider.otherwise('/');
    }
])
.run(['$state', '$rootScope',
    function ($state, $rootScope) {
        // ...
        $state.go('movies');
    }
])
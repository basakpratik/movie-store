'use strict'

angular.module('movieApp', [
    'ui', 'ui.router', 'ui.bootstrap', 'movieApp.header', 'movieApp.footer'
]);

angular.module('movieApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        // ...
    }
])
.run(['$state', '$rootScope', '$location',
    function ($state, $rootScope, $location) {
        // ...
    }
])
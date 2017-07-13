'use strict'

angular.module('movieApp', [
    'ui.router', 'movieApp.header', 'movieApp.footer'
]);

angular.module('movieApp').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        // ...
    }
])
.run(['$state', '$rootScope',
    function ($state, $rootScope) {
        // ...
    }
])
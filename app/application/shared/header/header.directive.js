'use strict'

angular.module('movieApp.header.directive',[]).directive('movieNavbar', function(){
    return {
        restrict: 'E',
        templateUrl: 'application/shared/header/header.html',
        link: function (scope, elem, attrs, state) {
            // ..
        },
        controller: function($scope){
            $scope.genres = ['Action', 'Adventure', 'Fantasy', 'Sci-Fi', 'Romance', 'Animation', 'Comedy', 'Drama', 'History', 'Thriller'];
        }
    }
});
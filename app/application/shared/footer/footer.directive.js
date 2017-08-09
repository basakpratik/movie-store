'use strict'

angular.module('movieApp.footer.directive',[]).directive('movieFooter', function(){
    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'application/shared/footer/footer.html',
        link: function (scope, elem, attrs, state) {
            // ..
        }
    }
});
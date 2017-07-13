'use strict'

angular.module('movieApp.footer.directive',[]).directive('footer', function(){
    return {
        restrict: EA,
        templateUrl: 'application/shared/footer/footer.html',
        link: function (scope, elem, attrs, state) {
            // ..
        }
    }
});
'use strict';

angular.module('movieApp.movies.service', []).service('MoviesService',
['$scope', '$log', '$q', function($scope, $log, $q){

    var data;
        
    this.getData = function(){
        var def = $q.defer();
        $http.get('http://starlord.hackerearth.com/movieslisting').then(function callSuccess(response){
            $log.log('response->'+response);
            data = response;
            def.resolve('Data resolved ..'+data);
        }, function callError(error){
            $log.error('Error fetching data ..!');
            def.reject('Error fetching data ..');
        });
        return def.promise;
    }

}]);
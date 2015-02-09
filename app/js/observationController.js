
angular.module('whaleatory').controller('observationController', ['$scope','$http','$window','$location',

    function ($scope,$http,$window,$location) {

        var vm = this;


		$scope.newObs = {lat:"latitude", lon:"longitude", comment:"comment", species:"species", time:"time" };
        $scope.proceed = function( ) {
	        	// Simple POST request example (passing data) :
			$http.post('/observation', {observations:$scope.newObs}).
			  success(function(data, status, headers, config) {
			    // this callback will be called asynchronously
			    // when the response is available
			  }).
			  error(function(data, status, headers, config) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  });
            //$location.path('gmap.html').replace();
        }

    }

]);

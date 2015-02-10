
angular.module('whaleatory').controller('observationController', ['$scope','$http','$window','$location',

    function ($scope,$http,$window,$location) {

        var vm = this;

        $scope.species =
	    [
	        { id: 1, type: "Whale", name: "North Atlantic Right Whales" },
	        { id: 2, type: "Whale", name: "Fin Whale" },
	        { id: 3, type: "Whale", name: "Humpback Whale" },
	        { id: 4, type: "Whale", name: "Killer Whale" },
	        { id: 5, type: "Whale", name: "Pygmy Sperm Whale" },
	        { id: 6, type: "Dolphin", name: "Atlantic Spotted Dolphin" },
	        { id: 7, type: "Dolphin", name: "Bottlenose Dolphin" },
	        { id: 8, type: "Seal", name: "Northern Elephant Seal" },
	        { id: 9, type: "Seal", name: "Spotted Seal" },
            { id: 10, type: "Penguin", name: "King Penguin" },
            { id: 11, type: "Penguin", name: "Rockhopper Penguin" }
	    ];  
	    
	    $scope.selectedSpecies = {};
		
		$scope.newObs = {pos: {latitude:"63.4474946", longitude:"10.481256"}, comment:"comment", species:"species", time:"time", icon:"img/whaletail.png"};
        $scope.proceed = function( ) {
	        // Simple POST request example (passing data) :
	        
			$http.post('/observation', {observations:$scope.newObs}).
			  success(function(data, status, headers, config) {
			  	$window.location='gmap.html';
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

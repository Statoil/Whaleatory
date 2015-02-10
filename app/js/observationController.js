
angular.module('whaleatory').controller('observationController', ['$scope','$http','$window','$location',

    function ($scope,$http,$window,$location) {

        var vm = this;

        $scope.species =
	    [
	        { id: 1, type: "Whale", name: "North Atlantic Right Whales", icon:"img/icon/whale_trans_small.png", image:"img/images/NorthernAtlanticRightSeal.jpg"},
	        { id: 2, type: "Whale", name: "Fin Whale", icon:"img/icon/whale_trans_small.png", image:"img/images/FinWhale.jpg"},
	        { id: 3, type: "Whale", name: "Humpback Whale", icon:"img/icon/whale_trans_small.png", image:"img/images/HumpbackWhale.jpg"},
	        { id: 4, type: "Whale", name: "Killer Whale", icon:"img/icon/whale_trans_small.png", image:"img/images/KillerWhale.jpg"},
	        { id: 5, type: "Whale", name: "Pygmy Sperm Whale", icon:"img/icon/whale_trans_small.png", image:"img/images/SpermWhale.jpg"},
	        { id: 6, type: "Dolphin", name: "Atlantic Spotted Dolphin", icon:"img/icon/dolphin_trans_small.png", image:"img/images/SpottedDolphin.jpg"},
	        { id: 7, type: "Dolphin", name: "Bottlenose Dolphin", icon:"img/icon/dolphin_trans_small.png", image:"img/images/BottlenoseDolphin.jpg"},
	        { id: 8, type: "Seal", name: "Northern Elephant Seal", icon:"img/icon/seal_trans_small.png", image:"img/images/NorthernElephantSeal.jpg"},
	        { id: 9, type: "Seal", name: "Spotted Seal", icon:"img/icon/seal_trans_small.png", image:"img/images/SpottedSeal.jpg"}
	    ];  
	    
		$scope.newObs = {pos: {latitude:"63.4474946", longitude:"10.481256"}, comment:"comment", species:"species", time:"time"};
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


angular.module('whaleatory').controller('gmapController', ['$scope','$http','$timeout',

    function ($scope,$http,$timeout) {

        var refreshRate = 5000;
        var vm = this;
        var iconTail = 'img/whaletail.png';

        $scope.liveData = {};
        $scope.markers = [];

        //GMap related below
        $scope.map = {mapTypeId: 'SATELLITE', center: {latitude: 63.4394346, longitude: 10.481066 }, zoom: 14 };
        $scope.options = {scrollwheel: false};

        //// LIVE UPDATES BELOW
        $scope.onTimeout = function () {
            var refresh = {};
            $http.get('/observation').
                success(function(data, status, headers, config) {
                    refresh.updated = data;
                    $scope.liveData = refresh;
                    //$scope.markers = $scope.liveData.updated;
                    for (var i = 0; i < $scope.liveData.updated.length; i++) {
                        var marker = $scope.liveData.updated[i];
                        if (!containsObject(marker,$scope.markers)) {
                            $scope.markers.push(marker);
                        } 
                        var animate = (($scope.liveData.updated.length-1) == i) ? 1 : 0;
                        $scope.markers[i].options = { "animation": animate };
                    }
                    
                }).
                error(function(data, status, headers, config) {
                });
            return refresh;
        };

        $scope.liveData  = $scope.onTimeout();  //Timeout function
        $scope.$watch('liveData', function () {
            $timeout($scope.onTimeout, refreshRate);
        });
        
        $scope.windowOptions = {
            visible: false
        };

        $scope.onClick = function() {
            $scope.windowOptions.visible = !$scope.windowOptions.visible;
        };

        $scope.closeClick = function() {
            $scope.windowOptions.visible = false;
        };
    }

]);

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i]._id === obj._id) {
            return true;
        }
    }

    return false;
}
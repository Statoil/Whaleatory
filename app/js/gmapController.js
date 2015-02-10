
angular.module('whaleatory').controller('gmapController', ['$scope','$http','$timeout',

    function ($scope,$http,$timeout) {

        var refreshRate = 1000;
        var vm = this;
        var iconTail = 'img/whaletail.png';

        $scope.liveData = {};

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
                }).
                error(function(data, status, headers, config) {
                });
            return refresh;
        };

        $scope.liveData  = $scope.onTimeout();  //Timeout function

        $scope.markers = [];
        $scope.$watch('liveData', function () {
            $timeout($scope.onTimeout, refreshRate);
            var tmp = [];
            if (typeof $scope.liveData.updated != 'undefined') {
                for (var i = 0; i < $scope.liveData.updated.length; i++) {
                    var marker = $scope.liveData.updated[i];
                    //console.log(JSON.stringify(marker));
                    tmp.push(marker);
                }
            }
            $scope.markers = tmp;
        });

    }

]);

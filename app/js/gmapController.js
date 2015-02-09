
angular.module('whaleatory').controller('gmapController', ['$scope','$http',

    function ($scope,$http) {

        var vm = this;
        var iconTail = 'img/whaletail.png';
        $scope.markers = [];


        var promise = $http.get('/observation-mock').then(function (response) {
            $scope.markers = response.data;

        });

        //GMap related below
        $scope.map = {center: {latitude: 63.4394346, longitude: 10.481066 }, zoom: 14 };
        $scope.options = {scrollwheel: false};

    }

]);

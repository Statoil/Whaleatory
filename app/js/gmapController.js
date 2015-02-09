
angular.module('whaleatory').controller('gmapController', ['$scope','$http',

    function ($scope,$http) {

        var vm = this;

        var promise = $http.get('/api/selfie').then(function (response) {
        });

        //GMap related below
        $scope.map = {center: {latitude: 63.4394346, longitude: 10.481066 }, zoom: 14 };
        $scope.options = {scrollwheel: false};
        var iconTail = 'img/whaletail.png';
        $scope.markers = [
            {id: 1, pos: {latitude: 63.4494346, longitude: 10.481066 }, icon: iconTail},
            {id: 2, pos: {latitude: 63.4474346, longitude: 10.483066 }, icon: iconTail}
        ];
    }

]);

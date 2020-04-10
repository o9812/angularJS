(function (){
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);


    LunchCheckController.$inject= ['$scope']
    function LunchCheckController ($scope){
        $scope.name="";
        $scope.status="";
        $scope.checkStatus = function() {
            var items = $scope.name.split(",");
            if (items.length == 1 && items[0]=="") $scope.status="Please enter data first";
            else if (items.length <= 3) $scope.status="Enjoy!";
            else $scope.status="Too much!";
            console.log(items);
            console.log(items[0]=="");
        }
    }
})();

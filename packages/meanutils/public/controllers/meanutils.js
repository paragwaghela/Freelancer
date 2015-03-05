'use strict';

angular.module('mean.meanutils').controller('MeanutilsController', ['$scope', 'Global', 'Meanutils',
    function($scope, Global, Meanutils) {
        $scope.global = Global;
        $scope.package = {
            name: 'meanutils'
        };
        $scope.menuUtil = [ {title: 'Project', link:'#!/meanutils/example/project'},
                            {title:'User', link: ''},
                            {title: 'Add project',link: '#!/meanutils/example/project/add' }
                          ];
        $scope.all = function(){

        };
    }
]);

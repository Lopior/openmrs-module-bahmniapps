angular.module('bahmni.clinical')
    .directive('buttonsRadio', function () {
        return {
            restrict:'E',
            scope:{ model:'=', options:'=', dirtyCheckFlag:'=' },
            link:function(scope, element, attrs){
                console.log("in link");
                if(attrs.dirtyCheckFlag){
                  scope.hasDirtyFlag = true;
              }
            },
            controller:function ($scope) {
                $scope.activate = function (option) {
                    console.log("in controller");
                    $scope.model = option;
                    if ($scope.hasDirtyFlag) {
                        $scope.dirtyCheckFlag = true;
                    }
                };
            },
            template:"<button type='button' class='btn' " +
                "ng-class='{active: option == model}'" +
                "ng-repeat='option in options' " +
                "ng-click='activate(option)'>{{option}} " +
                "</button>"
        };
    });
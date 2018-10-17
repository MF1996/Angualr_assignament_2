(
  function () {
    // Defining App & controller lunchCheckerApp & lunchCheckerController
    angular.module('lunchCheckerApp',[]).controller('lunchCheckerController',lunchCheckerController);
    //  inject scope & filter
    lunchCheckerController.$inject = ["$scope","$filter"]

    function lunchCheckerController($scope , $filter) {
         $scope.check = function () {

           // Recover data input
           if($scope.dishes != undefined && $scope.dishes != ""){
             var number = ($scope.dishes).split(',').length
             console.log(number)
             if(number == 0 ){
                $scope.respond = " Please enter data first "
             }else {
               if(number <= 3){
                 $scope.respond ="Enjoy !!"
               }else{
                 $scope.respond ="Too much!"
               }
             }
           }else{
             $scope.respond = " Please enter data first "
           }
        }
    }
  }
)();

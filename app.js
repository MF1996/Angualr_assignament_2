(function () {
  'user strict'
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService)

ToBuyController.$inject =['ShoppingListCheckOffService']
function ToBuyController(ShoppingListCheckOffService) {
   buy = this

}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService) {
   bought = this
}

function ShoppingListCheckOffService() {

}

})();

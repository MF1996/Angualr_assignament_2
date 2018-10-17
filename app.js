(function () {
  'user strict'
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService)

ToBuyController.$inject =['ShoppingListCheckOffService']
function ToBuyController(ShoppingListCheckOffService) {
   buy = this
   buy.ToBuy = ShoppingListCheckOffService.ToBuy


}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService) {
   bought = this
}

function ShoppingListCheckOffService() {
     service =  this
     service.ToBuy =  [
            {
              name: "cookies",
               quantity: 10
             }
            ,{
              name: "Milk",
               quantity: 5
             },
            {
              name: "chips",
               quantity: 3
             },
            {
              name: "Juice",
               quantity: 1
             },
            {
              name: "Eggs",
               quantity: 10
             }]
     
      return service
}

})();

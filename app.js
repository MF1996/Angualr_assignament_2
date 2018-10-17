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
   buy.apply= ShoppingListCheckOffService.Buy

}

AlreadyBoughtController.$inject=['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService) {
   bought = this
   bought.boughtItem = ShoppingListCheckOffService.bought
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
      service.bought = []
      service.Buy = function (index) {
           service.bought.push(service.ToBuy[index])
           service.ToBuy.splice(index,1)
      }

      return service
}

})();

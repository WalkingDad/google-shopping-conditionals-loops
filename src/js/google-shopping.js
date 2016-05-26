//console.log(data.items.kind["shopping#products"]);
var data = require('../products.json');
var counter = 0

for (var i = 0; i < data.items.length; i++) {
 console.log(data.items[i].product.brand)
 console.log(data.items[i].product.inventories[0].price)
 console.log(data.items[i].product.link)
}

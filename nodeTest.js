const Till = require('./lib/till')
const Receipt = require('./lib/receipt')
const Menu = require('./lib/menu')
const Order = require('./lib/order')
const { prices } = require('./hipstercoffee.json')
//extract json data from array
const items = prices[0]

menu = new Menu(items)
receipt = new Receipt(menu)
order = new Order(menu, receipt)
till = new Till(menu, order, receipt)

order.addItems("Cafe Latte", 1)
order.addItems("Cortado", 2)
order.addItems("Chocolate Chip Muffin", 4)
order.addItems("Tiramisu", 1)

order.itemPrices()
order.total()
const Till = require('./lib/till')
const Receipt = require('./lib/receipt')
const Menu = require('./lib/menu')
const Order = require('./lib/order')
const { prices } = require('./hipstercoffee.json')
const shopInfo = require('./hipstercoffee.json')
//extract json data from array
const items = prices[0]

menu = new Menu(items)
order = new Order(menu)
receipt = new Receipt(menu, order, shopInfo)
till = new Till(menu, order, receipt)

order.addItems("Tea", 1)
order.addItems("Cappucino", 3)
order.addItems("Choc Mudcake", 2)
order.addItems("Blueberry Muffin", 1)

// menu.isContainingItem("Tea")

// order.itemPrices()
// order.total()

// receipt.logItemList()
// order.showItems()

receipt.generateReceipt()
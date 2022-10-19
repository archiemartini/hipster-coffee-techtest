class Order {

  constructor(menu, receipt) {
    this.menu = menu || new Menu()
    this.receipt = receipt || new Receipt()
    this.items = {}
  }


  addItems(item, quantity) {
    if (!this.menu.isContainingItem) {
      throw new Error('Must provide an item on the menu')
    } 
    this.items[item] = quantity
  }

  itemPrices() {
    let itemPrices = []
    for(let item in this.items) {
      itemPrices.push(this.menu.price(item) * this.items[item])
    }
    return itemPrices
  }

  total() {
    return this.itemPrices().reduce((x, y) => x + y).toFixed(2)
  }
}


module.exports = Order;
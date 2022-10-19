class Till {

  constructor(menu, order, receipt, date) {
    this.menu = menu || new Menu()
    this.order = order || new Order()
    this.receipt = receipt || new Receipt()
    this.date = date || new Date()

  }

  printMenu() {
    return this.menu.showMenu()
  }

  addToOrder(item, quantity) {
    this.order.addItems(item, quantity)
  }
}

module.exports = Till;
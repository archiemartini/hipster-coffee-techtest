
class Menu {
  
  constructor(items) {
    this.items = items
  }

  showMenu() {
    return Object.keys(this.items).map((key) => {
      return key + ": " + this.items[key].toFixed(2)
    }).join(', ')
  }
}

module.exports = Menu;
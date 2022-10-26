class Receipt {
  
  constructor(menu, order, shopInfo) {
    this.menu = menu
    this.order = order
    this.shopInfo = shopInfo
  }

  generateReceipt() {
    this.logCoffeeArt()
    this.logTimeAndShop()
    this.logLineBreak()
    this.logShopInfo()
    this.logFullStop()
    this.logItemList()
    this.logLineBreak()
    this.logTax()
  }

  logTimeAndShop() {
    console.log(new Date().toLocaleString('en-gb'))
    console.log(this.shopInfo.shopName)
  }

  logShopInfo() {
    console.log(this.shopInfo.address)
    console.log(this.formatPhoneNumber(this.shopInfo.phone))
  }

  logTax() {
    let taxAmount = '$' + this.order.totalTax()
    let itemList = this.getItemList()
    const tax = 'Tax' + this.calculateTotalSpacing(itemList, 'Tax', taxAmount) + taxAmount
    console.log(tax)
  }

  calculateTotalSpacing(itemTotalArray, key, totalString) {
    let itemTotalWithMaxLength = itemTotalArray.reduce(function(prev, current){
      if(prev.length > current.length) return prev;
      else return current
    });

    let spacing = (itemTotalWithMaxLength.length - key.length) - totalString.length

    return ' '.repeat(spacing)
  }

  logLineBreak() {
    console.log()
  }

  logFullStop() {
    console.log(".")
  }

  getItemList() {
    let itemList = []
    const items = this.order.showItems()
    const keys = Object.keys(items)

    keys.forEach((key) => {
      itemList.push(' ' + key + this.calculateItemPriceSpacing(items, key) + items[key] + ' x ' + this.menu.price(key).toFixed(2))
    })

    return itemList
  }

  logItemList() {
    let itemList = this.getItemList()
    itemList.forEach((item) => {
      console.log(item)
    })
  }

  logCoffeeArt() {
    console.log(
      "      ██    ██    ██      ", '\n',
      "    ██      ██  ██        ", '\n',
      "    ██    ██    ██        ", '\n',
      "      ██  ██      ██      ", '\n',
      "      ██    ██    ██      ", '\n',
      "                          ", '\n',
      "  ████████████████████    ", '\n',
      "  ██                ██████", '\n',
      "  ██                ██  ██", '\n',
      "  ██                ██  ██", '\n',
      "  ██                ██████", '\n',
      "    ██            ██      ", '\n',
      "████████████████████████  ", '\n',
      "██                    ██  ", '\n',
      "  ████████████████████    ", '\n'
    )  
  }

  formatPhoneNumber(numberString) {
    let diallingCode = numberString[0]
    let prefix = numberString.slice(1, 4)
    let suffix = numberString.slice(4, 7)
    let extension = numberString.slice(7, 11)
    return "+" + diallingCode + " (" + prefix + ")" + " " + suffix + "-" + extension
  }

  calculateItemPriceSpacing(itemObject, key) {
    let keys = Object.keys(itemObject)

    let keyWithMaxLength = keys.reduce(function(prev, current){
      if(prev.length > current.length) return prev;
      else return current
    });

    let spacing = keyWithMaxLength.length - key.length

    return ' '.repeat(spacing) + ' '

    
  }
}

module.exports = Receipt;                                                                    
                                                                                        
                                                                                        
                                                                                        

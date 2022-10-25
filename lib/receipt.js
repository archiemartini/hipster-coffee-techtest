class Receipt {
  
  constructor(menu, order, shopInfo) {
    this.menu = menu
    this.order = order
    this.shopInfo = shopInfo
  }

  generateReceipt() {
    this.logTimeAndShop()
    this.logLineBreak()
    this.logShopInfo()
    this.logFullStop()
    this.logItemList()
  }

  logTimeAndShop() {
    console.log(new Date().toLocaleString('en-gb'))
    console.log(this.shopInfo.shopName)
  }

  logShopInfo() {
    console.log(this.shopInfo.address)
    console.log(this.formatPhoneNumber(this.shopInfo.phone))
  }

  logLineBreak() {
    console.log()
  }

  logFullStop() {
    console.log(".")
  }

  logItemList() {
    let itemList = []
    
    const items = this.order.showItems()
    let keys = Object.keys(items)

    keys.forEach((key) => {
      itemList.push(key + '   ' + items[key] + ' x ' + this.menu.price(key))
    })

    itemList.forEach((item) => {
      console.log(item)
    })
  }

  formatPhoneNumber(number) {
    let diallingCode = number[0]
    let prefix = number.slice(1, 4)
    let suffix = number.slice(4, 7)
    let extension = number.slice(7, 11)
    return "+" + diallingCode + " (" + prefix + ")" + " " + suffix + "-" + extension
  }
}

module.exports = Receipt;
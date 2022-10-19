const Order = require('../lib/order')
const Menu = require('../lib/menu')
const Receipt = require('../lib/receipt')
const { prices } = require('../hipstercoffee.json')
//extract json data from array
const items = prices[0]

jest.mock('../lib/menu')
jest.mock('../lib/receipt')

describe('the Order class', () => {

  let mockMenu;
  let mockReceipt;
  let order;
  beforeEach(() => {
    mockMenu = new Menu(items)
    mockReceipt = new Receipt()
    order = new Order(mockMenu, mockReceipt)

    mockMenu.isContainingItem = jest.fn().mockImplementation(() => true)
    mockMenu.price = jest.fn().mockImplementationOnce(() => 4.75).mockImplementation(() => 3.65)
    Menu.mockClear()
  })

  it('can add an item to the items object', () => {
    order.addItems("Cafe Latte", 1)

    expect(order.items).toEqual({"Cafe Latte": 1})
    expect(mockMenu.isContainingItem).toHaveBeenCalledTimes(1) 
  })

  it('can display item prices', () => {
    order.addItems("Cafe Latte", 1)
    order.addItems("Tea", 3)

    expect(order.itemPrices()).toEqual([4.75, 10.95])
    expect(mockMenu.price).toHaveBeenCalledTimes(2)
  })

  it('can display item totals', () => {
    order.addItems("Cafe Latte", 1)
    order.addItems("Tea", 3)

    expect(order.total()).toEqual((15.70).toFixed(2))
    expect(mockMenu.price).toHaveBeenCalledTimes(2)
  })

  it('can calculate appropriate tax', () => {
    order.addItems("Cafe Latte", 1)
    order.addItems("Tea", 3)

    expect(order.totalWithTax()).toEqual(17.06)
  })

  it('throws an error if the item is not found on menu', () => {
    mockMenu.isContainingItem = jest.fn().mockImplementation(() => false)
    expect(() => {order.addItems("Burger", 1)}).toThrowError("Must provide an item on the menu")
  })
 
})
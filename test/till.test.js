const Till = require('../lib/till')
const Receipt = require('../lib/receipt')
const Menu = require('../lib/menu')
const Order = require('../lib/order')
const { prices } = require('../hipstercoffee.json')
//extract json data from array
const items = prices[0]


jest.mock('../lib/menu')
jest.mock('../lib/receipt')
jest.mock('../lib/order')

describe('the Till class', () => {
  
  let till;
  let mockMenu;
  let mockReceipt;
  let mockOrder;
  beforeEach(() => {
    mockMenu = new Menu(items)
    mockOrder = new Order(mockMenu, mockReceipt)
    mockReceipt = new Receipt(mockMenu)

    till = new Till(mockMenu, mockOrder, mockReceipt)

    Receipt.mockClear()
    Order.mockClear()
  })

  it('prints out the menu', () => {
    mockMenu.showMenu = jest.fn()
    const expected =  "Cafe Latte: 4.75, Flat White: 4.75, Cappucino: 3.85, Single Espresso: 2.05, Double Espresso: 3.75, Americano: 3.75, Cortado: 4.55, Tea: 3.65, Choc Mudcake: 6.40, Choc Mousse: 8.20, Affogato: 14.80, Tiramisu: 11.40, Blueberry Muffin: 4.05, Chocolate Chip Muffin: 4.05, Muffin Of The Day: 4.55"
    
    till.printMenu()
    
    expect(mockMenu.showMenu).toHaveBeenCalledTimes(1)
  })

  it('adds item and quantity to order', () => {
    mockOrder.addItems = jest.fn()
    mockMenu.isContainingItem = jest.fn()

    till.addToOrder("Caffe Latte", 1)

    expect(mockOrder.addItems).toHaveBeenCalledTimes(1)
  })

})
const Menu = require('../lib/menu')
const Order = require('../lib/order')
const Receipt = require('../lib/receipt')
const { prices } = require('../hipstercoffee.json')
//extract json data from array
const items = prices[0]

jest.mock('../lib/menu')
jest.mock('../lib/order')

describe('the Receipt class', () => {

  let mockMenu;
  let mockOrder;
  let receipt;
  beforeEach(() => {
    mockMenu = new Menu(items)
    mockOrder = new Order(mockMenu)
    receipt = new Receipt(mockMenu, mockOrder)

    Menu.mockClear
    Order.mockClear
    mockMenu.price = jest.fn().mockImplementation(() => 3.65)
    mockOrder.showItems = jest.fn().mockImplementation(() => { Tea: 1 })
  })
  
  // it('generates an Item List', () => {
    
  //   expect(receipt.generateItemList()).toEqual([ 'Tea   1 x 3.65' ])
  //   expect(mockMenu.price).toHaveBeenCalledTimes(1)
  //   expect(mockOrder.showItems).toHaveBeenCalledTimes(1)
  // })

  it('logs cafe info', () => {
    
  })

  
})
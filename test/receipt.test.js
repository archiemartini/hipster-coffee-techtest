const Menu = require('../lib/menu')
const Order = require('../lib/order')
const Receipt = require('../lib/receipt')
const { prices } = require('../hipstercoffee.json')
const shopInfo = require('../hipstercoffee.json')
//extract json data from array
const items = prices[0]

jest.mock('../lib/menu')
jest.mock('../lib/order')

const consoleSpy = jest.spyOn(console, 'log').mockImplementation()

describe('the Receipt class', () => {

  let mockMenu;
  let mockOrder;
  let receipt;
  beforeEach(() => {
    mockMenu = new Menu(items)
    mockOrder = new Order(mockMenu)
    receipt = new Receipt(mockMenu, mockOrder, shopInfo)

    jest.spyOn(mockOrder, 'showItems')
    jest.spyOn(mockMenu, 'price')

    mockOrder.showItems = jest.fn().mockImplementation(() => { Tea: 1 })
    mockMenu.price = jest.fn().mockImplementation((item) => 3.65)
    
    Menu.mockClear()
    Order.mockClear()
    consoleSpy.mockClear()
  })

  describe('the generateReceipt function', () => {

    // it('calls all relative functions correctly', () => {
    //   receipt.generateReceipt()
    //   expect(receipt.logTimeAndShop)
    //   expect(receipt.logLineBreak)
    //   expect(receipt.logShopInfo)
    //   expect(receipt.logFullStop)
    //   expect(receipt.logItemList)
    // })

    it('generates an Item List', () => {
      receipt.logItemList()

      expect(mockOrder.showItems).toHaveBeenCalledTimes(1)
      expect(mockMenu.price).toHaveBeenCalledWith('Tea')
    })
    
  })
  

  describe('the Logging functions', () => {

    test('function logShopInfo', () => {
      receipt.logShopInfo()
      expect(console.log).toBeCalledTimes(2)
      expect(console.log.mock.calls[0][0]).toEqual("123 Lakeside Way")
      expect(console.log.mock.calls[1][0]).toEqual("+1 (650) 360-0708")

    })

    test('the logTimeAndShop function', () => {
      let mockDate = jest.spyOn(Date.prototype, 'toLocaleString').mockReturnValue('2022-10-26, 14:00:00');
      receipt.logTimeAndShop()
      expect(console.log).toBeCalledTimes(2)
      expect(console.log.mock.calls[0][0]).toEqual("2022-10-26, 14:00:00")
      expect(console.log.mock.calls[1][0]).toEqual("The Coffee Connection")
    })

    test('function logLineBreak', () => {
      receipt.logLineBreak()
      expect(console.log).toBeCalledTimes(1)
      expect(console.log.mock.calls[0][0]).toEqual(undefined)
    })

    test('function logFullStop', () => {
      receipt.logFullStop()
      expect(console.log).toBeCalledTimes(1)
      expect(console.log.mock.calls[0][0]).toEqual(".")
    })
    

  })
  
  describe('the helper functions', () => {
    
    test('the formatPhonenumber function', () => {
      expect(receipt.formatPhoneNumber('1234567890')).toEqual("+1 (234) 567-890")
    })

  })
  
})
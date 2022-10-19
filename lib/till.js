export default class Till {

  constructor(receipt, date) {
    this.receipt = receipt || new Receipt()
    this.date = date || new Date()
    
  }
}
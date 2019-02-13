//private
import VendingMachine from '../models/vendingMachine.js'

let _vendingmachine = new VendingMachine()


//public
export default class VenderService {
  constructor() {
    console.log('building the service')
  }
  get Snacks() {
    return _vendingmachine.snacks
  }
  get Balance() {
    return _vendingmachine.balance
  }
  addQuarter() {
    _vendingmachine.balance += .25
  }
  buyItem(event) {
    debugger
    if (_vendingmachine.balance > _vendingmachine.snacks[event.target.id].price) {
      console.log('got it')
    }
  }
}
import Snack from "./snack.js";

export default class VendingMachine {
  constructor() {
    this.snacks = {
      a1: new Snack('soda', 1, '../../assets/images/soda.jpg'),
      a2: new Snack('candy', .5, '../../assets/images/candy-bar.jpg'),
      a3: new Snack('chips', 1, '../../assets/images/chips.jpg')
    }
    this.balance = 0
  }

}
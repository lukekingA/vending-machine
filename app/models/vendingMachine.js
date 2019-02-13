import Snack from "./snack.js";

export default class VendingMachine {
  constructor() {
    this.snacks = {
      a1: {
        snack: new Snack('soda', 1, '../../assets/images/soda.jpg'),
        quantity: 10
      },
      a2: {
        snack: new Snack('candy', .5, '../../assets/images/candy-bar.jpg'),
        quantity: 10
      },
      a3: {
        snack: new Snack('chips', 1, '../../assets/images/chips.jpg'),
        quantity: 10
      }
    }
    this.balance = 0
  }

}
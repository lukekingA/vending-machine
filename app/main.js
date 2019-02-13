import venderControler from "./components/vendorControler.js";

class App {
  constructor() {
    this.controllers = {
      venderControler: new venderControler()
    }
  }
}

window.app = new App()
import venderControler from "./components/venderControler.js";

class App {
  constructor() {
    this.controllers = {
      venderControler: new venderControler()
    }
  }
}

window.app = new App()
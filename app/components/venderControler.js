import VenderService from "./venderService.js";
//private


let venderService = new VenderService()

function draw() {
  let snacks = venderService.Snacks
  let balance = venderService.Balance
  let template = ''
  for (let snack in snacks) {
    template += `
     <div class="col-4">
      <img class="img-fluid" src=${snacks[snack].image} alt="">
      <button id="${snacks[snack].name}"
      class = "btn btn-dark text-light"
      type = "button" onclick="app.controllers.venderControler.buyItem(event)">${
        snacks[snack].name
      }</button>
      <p>${snacks[snack].price.toFixed(2)}</p> 
    </div>`
  }

  template += `
    <div class="row w-100">
      <div class="col d-flex flex-column align-items-center">
      <p>Balance: <span>${venderService.Balance.toFixed(2)}</span></p>
      <button class="btn btn-dark text-white" type="button" onclick="app.controllers.venderControler.addQuarter()"> Deposit 25 cents </button>
      </div>
    </div>`
  document.getElementById('app').innerHTML = template
}






//public
export default class venderControler {
  constructor() {
    console.log('building the controler')
    draw()
  }
  addQuarter() {
    venderService.addQuarter()
    draw()
  }
  buyItem(event) {
    venderService.buyItem(event)
  }
}
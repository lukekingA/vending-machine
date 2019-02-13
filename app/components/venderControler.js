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
      <img class="img-fluid" src=${snacks[snack].snack.image} alt="">
      <button id="${snacks[snack].snack.name}"
      data-id="${snack}"
      class = "btn btn-dark text-light"
      type = "button" onclick="app.controllers.venderControler.buyItem(event)">${
        snacks[snack].snack.name
      }</button>
      <p>${snacks[snack].snack.price.toFixed(2)}</p> 
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

function draw2(event) {
  let template2 = ''
  template2 += `
  <div class="card">
  <div class="card-body">
    <img src=${venderService.Snacks[event.target.dataset.id].snack.image} alt="" class="card-img">
    <p class="card-text">Please Take Your Item</p>
    <button class="btn btn-dark text-white"
    type="button"
    onclick="app.controllers.venderControler.redraw()"> OK </button>
  </div>
</div>`
  document.getElementById('app').innerHTML = template2

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
    let vend = venderService.buyItem(event)
    draw()
    if (vend) {
      draw2(event)
    }
  }
  redraw() {
    draw()
  }
}
import VendorService from "./vendorService.js";
//private

let vendorService = new VendorService();

function draw() {
  let snacks = vendorService.Snacks;
  let balance = vendorService.Balance;
  let template = "";
  for (let snack in snacks) {
    template += `
     <div class="col-4 d-flex flex-column align-items-center">
      <img class="img-fluid" src=${snacks[snack].snack.image} alt="">
      <button id="${snacks[snack].snack.name}"
      data-id="${snack}"
      class = "btn btn-dark text-light"
      type = "button" onclick="app.controllers.venderControler.buyItem(event)">${
        snacks[snack].snack.name
      }</button>
      <p>${snacks[snack].snack.price.toFixed(2)}</p> 
    </div>`;
  }

  template += `
    <div class="row w-100">
      <div id="optMessage"class="col d-flex flex-column align-items-center">
      <p>Balance: <span>${balance.toFixed(2)}</span></p>
      <button class="btn btn-dark text-white" type="button" onclick="app.controllers.venderControler.addQuarter()"> Deposit 25 cents </button>
      </div>
    </div>`;
  document.getElementById("app").innerHTML = template;
}



function draw2(event) {
  let template2 = "";
  template2 += `
  <div class="col-4 offset-4 d-flex justify-content-center"
  <div class="card">
  <div class="card-body">
    <img src=${
      vendorService.Snacks[event.target.dataset.id].snack.image
    } alt="" class="card-img">
    <p class="card-text">Please Take Your Item</p>
    <button class="btn btn-dark text-white"
    type="button"
    onclick="app.controllers.venderControler.redraw()"> OK </button>
  </div>
</div>
</div>`;
  document.getElementById("app").innerHTML = template2;
}

//public
export default class vendorControler {
  constructor() {
    console.log("building the controler");
    draw()
  }
  addQuarter() {
    vendorService.addQuarter();
    draw()
  }
  buyItem(event) {
    let vend = vendorService.buyItem(event);
    draw();
    if (vend) {
      draw2(event);
    } else {
      document
        .getElementById("optMessage")
        .lastElementChild.insertAdjacentHTML(
          "afterbegin",
          "<p> You Need More Money</p>"
        );
    }
  }
  redraw() {
    draw();
  }
}
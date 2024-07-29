let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function Passenger() {
  count = count + 1;
  countEl.textContent = count;
  // document.getElementById("result").innerText = count;
}

function save(){
  let countstr;
  countstr = count + " - "
  saveEl.textContent += countstr;
  countEl.textContent = 0;
  count = 0;
}

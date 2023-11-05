const serviceQual = document.querySelector("#service-Quality");
const peopleCount = document.querySelector("#person-count");
const billAmount = document.querySelector("#billAmount");
const submit = document.querySelector("button");
const main = document.querySelector('#answer');
let is = true
submit.addEventListener(
  "click",
  function () {
    if (
      serviceQual.value == 0 ||
      peopleCount.value == null ||
      billAmount.value == null
    )
      alert("enter the values");
    else if(is) {
      let div = billAmount.value / peopleCount.value;
      let answer = Math.ceil((div * serviceQual.value) / 100);
      console.log(answer);
      const a = document.createElement("p")
      a.innerHTML = "TIP AMOUNT";
      const b = document.createElement("p")
      b.innerHTML = answer;
      const c =document.createElement("p")
      c.innerHTML = "each";
      main.appendChild(a)
      main.appendChild(b)
      main.appendChild(c)
   
      is = false;
    }
  },
  false
);



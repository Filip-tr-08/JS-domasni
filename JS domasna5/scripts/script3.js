let kilo = parseFloat(prompt("Enter your wieght in kilograms"));
const chicken = 0.5;
let body = document.getElementsByTagName("body")[0];
let div = document.createElement("div");
body.appendChild(div);
let h3 = document.createElement("h3");
let p = document.createElement("p");

function weightInChickens(k, c, x, y, d) {
  let mul = k * c;
  x.innerText = `Your kilograms in chickens is:`;
  y.innerText = `${mul} chickens`;
  d.append(x);
  d.append(y);
}

weightInChickens(kilo, chicken, h3, p, div);

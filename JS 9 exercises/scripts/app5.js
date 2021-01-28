let btn = document.getElementById("sub");
let a = document.getElementById("sideA");
let b = document.getElementById("sideB");
let p = document.getElementsByTagName("p")[0];

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let area = a.value * b.value;
  p.innerText = `${area}`;
});

p.addEventListener("mouseover", function () {
  let sum = parseFloat(a.value) + parseFloat(b.value);
  p.innerText = `${sum}`;
  p.classList.add("class1");
});

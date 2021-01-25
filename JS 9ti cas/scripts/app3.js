let a = document.getElementById("sideA");
let b = document.getElementById("sideB");
let p = document.getElementsByTagName("p")[0];
let btn = document.getElementById("sub");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let area = a.value * b.value;
  console.log(area);
  p.innerText = `${area}`;
});

p.addEventListener("mouseover", function (e) {
  let sum1 = a.value + b.value;
  p.innerText = `${sum1}`;
  p.classList.add("class1");
});

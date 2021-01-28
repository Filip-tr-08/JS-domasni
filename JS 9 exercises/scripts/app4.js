let btn = document.getElementById("sub");
let input = document.getElementById("input");
let select = document.getElementsByClassName("select")[0];
let p = document.getElementsByTagName("p")[0];
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let option = document.createElement("option");
  option.setAttribute("value", `${input.value}`);
  option.textContent = `${input.value}`;

  select.appendChild(option);
});
input.addEventListener("blur", function () {
  if (!input.value) {
    p.classList.remove("hidden");
    p.classList.add("show");
  } else {
    p.classList.add("hidden");
    p.classList.remove("show");
  }
});
input.addEventListener("click", function () {
  if (!input.value) {
    p.classList.remove("hidden");
    p.classList.add("show");
  } else {
    p.classList.add("hidden");
    p.classList.remove("show");
  }
});

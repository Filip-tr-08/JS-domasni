let firstDiv = document.getElementById("myDiv");
let secondDiv = document.getElementById("content");
secondDiv.style.width = "fit-content";
let btn = document.getElementsByTagName("input")[2];
btn.addEventListener("click", function (e) {
  let n = 6;
  let fName = document.getElementsByTagName("input")[0];
  let lName = document.getElementsByTagName("input")[1];
  check(fName.value.length, n);
  check(lName.value.length, n);
  secondDiv.innerText = `${fName.value} ${lName.value}`;
});

secondDiv.addEventListener("mouseover", function (e) {
  secondDiv.innerText = "";
});

function check(x, y) {
  if (x < y) {
    alert(`Please Enter more than ${y} characters`);
  }
}

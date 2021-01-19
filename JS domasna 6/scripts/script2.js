let body = document.getElementsByTagName("body")[0];
let btn = document.getElementById("submit");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let fName = document.getElementById("fname").value;
  let lName = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  if (fName == "" || lName == "" || email == "" || pass == "") {
    alert("Please fill all fields");
  }
  console.log(fName, lName, email, pass);
  print(fName, lName, email, pass);
});

function print(a, b, c, d) {
  let parag = document.createElement("p");
  parag.innerText = `${a} ${b} ${c} ${d}`;
  body.appendChild(parag);
}

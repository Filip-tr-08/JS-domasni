function Student(firstName, lastName, studentAge) {
  this.fName = firstName;
  this.lName = lastName;
  this.age = studentAge;
}
let body = document.getElementsByTagName("body")[0];
let ul = document.createElement("ul");
let btn = document.getElementById("btn");
let array = [];
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let age = document.getElementById("age").value;
  if (fName === "" || lName === "" || age === "") {
    alert("Please fill all fields");
  } else if (!isNaN(fName) || !isNaN(lName)) {
    alert("Please insert string for the first and the last name!");
  } else {
    let student = new Student(fName, lName, age);
    array.push(student);
    console.log(array);

    let li = document.createElement("li");
    li.textContent = `${
      student.fName.charAt(0).toUpperCase() + student.fName.slice(1)
    } ${student.lName.charAt(0).toUpperCase() + student.lName.slice(1)} - ${
      student.age
    }`;
    ul.appendChild(li);
  }
});
body.appendChild(ul);

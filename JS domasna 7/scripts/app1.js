function Book(title, author, readingStatus) {
  this.t = title;
  this.a = author;
  this.rS = readingStatus;
  this.info = function () {
    if (this.rS == "true") {
      return `Already read '${
        this.t.charAt(0).toUpperCase() + this.t.slice(1)
      }' by ${this.a.charAt(0).toUpperCase() + this.a.slice(1)} `;
    } else if (this.rS == "false") {
      return `You still need to read '${
        this.t.charAt(0).toUpperCase() + this.t.slice(1)
      }' by ${this.a.charAt(0).toUpperCase() + this.a.slice(1)} `;
    } else {
      return "Invalid input please type true or false";
    }
  };
}
let body = document.getElementsByTagName("body")[0];
let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let rStatus = document.getElementById("rStatus").value;
  if (title === "" || author == "" || rStatus === "") {
    alert("Please fill all fields");
  } else {
    let book = new Book(title, author, rStatus);
    let message = document.createElement("h2");
    message.textContent = book.info();
    body.appendChild(message);
  }
});

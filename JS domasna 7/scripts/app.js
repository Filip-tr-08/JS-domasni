function Animal(name, kind) {
  this.n = name;
  this.k = kind;
  this.speak = function (x) {
    console.log(
      `${this.k.charAt(0).toUpperCase() + this.k.slice(1)} ${
        this.n.charAt(0).toUpperCase() + this.n.slice(1)
      } says: '${x.charAt(0).toUpperCase() + x.slice(1)}'`
    );
  };
}
let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let kind = document.getElementById("kind").value;
  let sentance = document.getElementById("sentance").value;
  if (name === "" || kind === "" || sentance === "") {
    alert("Please fill all fields");
  } else {
    let animal = new Animal(name, kind);
    animal.speak(sentance);
  }
});

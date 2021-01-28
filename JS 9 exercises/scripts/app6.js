let input = document.getElementById("radius");
let buttons = document.querySelectorAll(".btn");
let p = document.getElementsByTagName("p")[0];
const PI = 3.14;
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    let area = Math.pow(this.radius, 2) * PI;
    return area;
  };
  this.getPerimeter = function () {
    let perimeter = this.radius * 2 * PI;
    return perimeter;
  };
}
let circle;
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let styles = e.currentTarget.classList;
    if (styles.contains("submit")) {
      if (!input.value) {
        p.classList.remove("hidden");
        p.classList.add("show");
      } else {
        p.classList.add("hidden");
        p.classList.remove("show");
        circle = new Circle(input.value);
        console.log(circle.radius);
      }
    } else if (styles.contains("area")) {
      if (!input.value) {
        p.classList.remove("hidden");
        p.classList.add("show");
      } else {
        p.classList.remove("hidden");
        p.classList.remove("show");
        p.classList.add("show1");
        let a = circle.getArea();
        console.log(a);
        p.innerText = ` The area is: ${a}`;
      }
    } else if (styles.contains("perimeter")) {
      if (!input.value) {
        p.classList.remove("hidden");
        p.classList.add("show");
      } else {
        p.classList.remove("hidden");
        p.classList.remove("show");
        p.classList.add("show1");
        let a = circle.getPerimeter();
        console.log(a);
        p.innerText = `The perimeter is : ${a}`;
      }
    }
  });
});

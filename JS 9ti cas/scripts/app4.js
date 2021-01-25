function Pet(name, type, age, isHealthy, owner) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.isHealthy = isHealthy;
  this.owner = owner;
  this.isAdopted = function () {
    return !!this.owner;
  };
}
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
array1 = [
  new Pet("name", "dog", 2, true, "adam"),
  new Pet("charlie", "dog", 4, true, "adam"),
  new Pet("charlie", "dog", 5, true, "adam"),
  new Pet("charlie", "dog", 8, true, "petko"),
  new Pet("charlie", "dog", 9, true, "eva"),
  new Pet("kiki", "parrot", 2, true),
  new Pet("dzoni", "cat", 1, true, "charlie"),
];
array2 = [
  new Person("adam", "lastname", 30),
  new Person("petko", "lastname", 30),
  new Person("eva", "lastname", 30),
  new Person("charlie", "lastname", 30),
];
let input = document.getElementById("name");
let btn = document.getElementById("sub");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  for (let i = 0; i < array1.length; i++) {
    if (array2[i].firstName == input.value) {
      if (array2[i].firstName == array1[i].owner) {
      }
    }
  }
});

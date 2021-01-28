let body = document.getElementsByTagName("body")[0];
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
  this.print = function () {
    let h4 = document.createElement("h4");
    h4.textContent = `${this.firstName} - ${this.lastName} - ${this.age}`;
    body.appendChild(h4);
    if (this.hasOwnProperty("ownerPets")) {
      for (pet of this.ownerPets) {
        let h5 = document.createElement("h5");
        h5.textContent = `${pet.name}`;
        h4.appendChild(h5);
      }
    }
  };
}
let pets = [
  new Pet("Maca", "cat", 8, true, "Filip"),
  new Pet("Miki", "parrot", 4, true, "Kiko"),
  new Pet("Tifa", "dog", 9, true, "Filip"),
  new Pet("Muffins", "cat", 2, true),
];
let people = [
  new Person("Filip", "Trajanovski", 25),
  new Person("Kiko", "Todorovski", 24),
  new Person("Someone", "Else", 45),
];

let input = document.getElementById("name");
let btn = document.getElementById("find");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!input.value) {
    console.log("Please insert your name");
    return;
  }
  let pOwner;
  for (let person of people) {
    if (person.firstName.toLowerCase() === input.value.toLowerCase()) {
      pOwner = person;
      break;
    }
  }
  if (!pOwner) {
    console.log("This guy is not an owner");
    return;
  }
  pOwner.ownerPets = [];
  for (let pet of pets) {
    if (
      !!pet.owner &&
      pet.owner.toLowerCase() === pOwner.firstName.toLowerCase()
    ) {
      pOwner.ownerPets.push(pet);
    }
  }

  pOwner.print();
});

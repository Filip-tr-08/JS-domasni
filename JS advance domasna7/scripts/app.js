function Person(id, firstName, lastName, age) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

function Animal(name, age) {
  this.name = name;
  this.age = age;
  this.eat = function () {
    console.log(`${this.name} eats now!`);
  };
  this.sleep = function () {
    console.log(`${this.name} sleeps now!`);
  };
}

function Cat(name, age, color, ownerId) {
  Object.setPrototypeOf(this, new Animal(name, age));
  this.color = color;
  this.ownerId = ownerId === undefined ? null : ownerId;
  this.meow = function () {
    console.log(`The cat ${this.name} says Meow`);
  };
  this.ownerIdmethod = function (own) {
    if (this.ownerId === null) {
      console.log(`This cat does not have owner`);
    } else {
      if (own[this.ownerId] == undefined) {
        console.log(`There is not owner with this index`);
      } else {
        console.log(`Owner:`);
        console.log(`${own[this.ownerId].getFullName()} - ${own[ownerId].age}`);
      }
    }
  };
}

function PersianCat(name, age, color, ownerId, eyeColor) {
  Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));
  this.eyeColor = eyeColor;
  this.furDescription = function () {
    console.log(`The cat ${this.name} has full fur`);
  };
}

function RagDollCat(name, age, color, ownerId, weight, isFriendly) {
  Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));
  this.weight = weight;
  this.isFriendly = typeof isFriendly != "boolean" ? null : isFriendly;
  this.printPersonality = function (type) {
    if (type === true) {
      this.isFriendly = true;
      console.log(`The cat is friendly`);
    } else {
      this.isFriendly = false;
      console.log("The cat is not friendly");
    }
  };
}

let filip = new Person(0, "Filip", "Trajanovski", 25);
let ivana = new Person(1, "Ivana", "Angelovska", 23);
let petko = new Person(2, "Petko", "Petkovski", 27);
let stanko = new Person(3, "Stanko", "Stankovski", 30);
let marko = new Person(4, "Marko", "Markovski", 18);

let people = [filip, ivana, petko, stanko, marko];
let colors = ["white", "black", "brown", "yellow", "grey"];

let ragCat = new RagDollCat(
  "Maca",
  8,
  colors[Math.floor(Math.random() * colors.length)],
  0,
  15
);

let persCat = new PersianCat(
  "Mimi",
  2,
  colors[Math.floor(Math.random() * colors.length)],
  1,
  colors[Math.floor(Math.random() * colors.length)]
);

console.log(filip.getFullName());

console.log(ragCat);

ragCat.printPersonality(true);

console.log(ragCat);

console.log(persCat);

ragCat.ownerIdmethod(people);
ragCat.eat();
ragCat.sleep();

persCat.ownerIdmethod(people);
persCat.furDescription();
persCat.meow();

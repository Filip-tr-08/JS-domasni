class Person {
  constructor(firstName, lastName, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
  }

  get firstName() {
    console.log(`Getting the first name.`);
    return this._firstName;
  }
  get lastName() {
    console.log(`Getting the last name.`);
    return this._lastName;
  }
  get age() {
    console.log(`Getting the age.`);
    return this._age;
  }
  get address() {
    console.log(`Getting the address.`);
    return this._address;
  }
  set firstName(fName) {
    console.log("Setting the first name.");
    !!fName && typeof fName === "string" && fName.length > 1
      ? (this._firstName = fName)
      : (() => {
          throw new Error("Invalid first name");
        })();
  }
  set lastName(lName) {
    console.log("Setting the last name.");
    !!lName && typeof lName === "string" && lName.length > 1
      ? (this._lastName = lName)
      : (() => {
          throw new Error("Invalid last name");
        })();
  }
  set age(agePerson) {
    console.log("Setting the age.");
    !!agePerson && typeof agePerson === "number" && agePerson > 0
      ? (this._age = agePerson)
      : (() => {
          throw new Error("Invalid age");
        })();
  }
  set address(add) {
    console.log("Setting the address.");
    !!add && typeof add === "string" && add.length > 1
      ? (this._address = add)
      : (() => {
          throw new Error("Invalid address");
        })();
  }
  fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}
export { Person };

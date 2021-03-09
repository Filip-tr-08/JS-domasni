import { Person } from "./person.js";
class Student extends Person {
  constructor(firstName, lastName, age, address, subjects, academy) {
    super(firstName, lastName, age, address);
    this.subjects = subjects === undefined ? [] : subjects;
    this.academy = academy;
  }
  get academy() {
    console.log(`Getting the academy.`);
    return this._academy;
  }
  get subjects() {
    console.log(`Getting the subjects .`);
    return this._subjects;
  }
  set academy(acad) {
    console.log("Setting the academy.");
    !!acad && typeof acad === "string" && acad.length > 1
      ? (this._academy = acad)
      : (() => {
          throw new Error("Invalid address");
        })();
  }
  set subjects(sub) {
    console.log("Setting the subjects.");
    sub.forEach((element) => {
      !!element && typeof element === "string" && element.length > 1
        ? (this._subjects = sub)
        : (() => {
            throw new Error("Invalid subject");
          })();
    });
  }

  static check(student, subject) {
    if (
      student instanceof Student &&
      subject.length > 0 &&
      typeof subject === "string"
    ) {
      if (student.subjects.filter((s) => s === subject).length > 0) {
        console.log(
          `The student ${student.fullName()} is studying ${subject} `
        );
      } else {
        console.log(
          `The student ${student.fullName()} is not studying ${subject} `
        );
      }
    } else {
      console.log("Invalid Student or invalid subject");
    }
  }
}
export { Student };

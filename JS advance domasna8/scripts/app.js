import { Student } from "./student.js";
import { students } from "./students.js";

console.log(students.filip.fullName());

Student.check(students.filip, "js");
Student.check(students.filip, "Angular");
Student.check(students.filip, 1);
Student.check(students.petko, "php");
Student.check(students.petra, "react");

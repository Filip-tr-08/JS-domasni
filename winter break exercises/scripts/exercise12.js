var grade = prompt("Type your grade:");
grade = grade.toUpperCase();

switch (grade) {
  case (grade = "A"):
    document.write("Excellent job");
    break;
  case (grade = "B"):
    document.write("Good job");
    break;
  case (grade = "C"):
    document.write("Passed");
    break;
  case (grade = "D"):
    document.write("Not so good");
    break;
  case (grade = "F"):
    document.write("Failed");
    break;
  default:
    document.write("Uknown grade!");
}

import { Student } from "./student.js";

let students = {
  filip: new Student(
    "filip",
    "trajanovski",
    25,
    "Skopje",
    [
      "js",
      "html",
      "css",
      "c#",
      "ASP.NET",
      "react",
      "node.js",
      "express.js",
      "azure",
    ],
    "SEDC"
  ),

  petko: new Student(
    "Petko",
    "Petkovski",
    30,
    "Skopje",
    ["php", "laravel", "html", "css", "python", "django", "java", "spring"],
    "Code academy"
  ),

  petra: new Student(
    "Petra",
    "Petrusevska",
    24,
    "Ohrid",
    [("docker", "kubernets", "jenkins", "maven", "salstack", "jira")],
    "SEDC"
  ),
};

export { students };

const http = require("http");
const txtService = require("./textService");
const hostname = "127.0.0.1";
const port = 3000;

class Student {
  constructor(fName, lName, averageGrade) {
    this.fName = fName;
    this.lName = lName;
    this.averageGrade = averageGrade;
  }
}

let students = [
  new Student("filip", "trajanovski", 8),
  new Student("petko", "petkovski", 7),
  new Student("stanko", "stankovski", 10),
];

//txtService.writeFile(JSON.stringify(students));
console.log(txtService.readAndParseJsonFile());

const server = http
  .createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(students));
    res.end();
  })
  .listen(port, hostname, () => {
    console.log(`Server is listening on ${hostname} - ${port}`);
  });

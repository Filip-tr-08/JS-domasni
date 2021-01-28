function Person(fullName, job, salary) {
  this.fullName = fullName;
  this.job = job;
  this.salary = salary;
}

let array = [
  new Person("Jonh T.", "engineer", 500),
  new Person("Steve R.", "soldier", 400),
  new Person("Bruce Banner", "scientis", 600),
];

function sumSalary(arr) {
  let sum = 0;
  for (person of arr) {
    sum += person.salary;
  }
  return sum;
}

console.log(sumSalary(array));

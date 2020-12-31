var f1 = parseInt(prompt("First: When you were born?"));
var f2 = parseInt(prompt("First: What is the current year"));

var s1 = parseInt(prompt("Second: When you were born?"));
var s2 = parseInt(prompt("Second: What is the current year"));

var t1 = parseInt(prompt("Third: When you were born?"));
var t2 = parseInt(prompt("Third: What is the current year"));

function calculateAge(x, y) {
  let result = y - x;
  document.write(`<br>You are ${result}`);
}
calculateAge(f1, f2);
calculateAge(s1, s2);
calculateAge(t1, t2);

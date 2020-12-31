var n1 = parseInt(prompt("Type the first grade:"));
var n2 = parseInt(prompt("Type the second grade:"));
var n3 = parseInt(prompt("Type the third grade:"));
var n4 = parseInt(prompt("Type the forth grade:"));
var n5 = parseInt(prompt("Type the fifth grade:"));
var average = (n1 + n2 + n3 + n4 + n5) / 5;
if (average >= 8) {
  alert(`You have passed with average grade=${average}`);
} else {
  alert(`You failed with average grade=${average}`);
}

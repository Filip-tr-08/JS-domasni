var n1 = parseFloat(prompt("Type the first number:"));
var n2 = parseFloat(prompt("Type the second number:"));
var n3 = 100 - n1;
var n4 = 100 - n2;
if (n1 < 0 || n2 < 0) {
  alert("You have inserted a negartive number!!!");
} else if (n3 > n4) {
  alert(`Number ${n2} is closer to 100`);
} else if (n4 > n3) {
  alert(`Number ${n1} is closer to 100`);
}

var n1 = parseFloat(prompt("Type the first number:"));
var n2 = parseFloat(prompt("Type the second number:"));
if (n1 === n2) {
  sum = 3 * (n1 + n2);
} else {
  sum = n1 + n2;
}
document.write(`The sum is ${sum}`);

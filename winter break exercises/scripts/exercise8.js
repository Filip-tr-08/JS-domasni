var n1 = parseInt(prompt("Type the first number:"));
var n2 = parseInt(prompt("Type the second number:"));
function check(x, y) {
  let result = x + y;
  if (x > 30 || y > 30 || result === 50) {
    return true;
  } else {
    return false;
  }
}
var c = check(n1, n2);
document.write(c);

var n = parseInt(prompt("When you were born?"));
var n1 = new Date(Date.now());
n1 = n1.getFullYear();
function calculateAge(x, y) {
  let result = y - x;
  document.write(`You are ${result}`);
}
calculateAge(n, n1);

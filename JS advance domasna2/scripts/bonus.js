let n = parseInt(prompt("Number:"));
function factrorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factrorial(n - 1);
}
console.log(factrorial(n));

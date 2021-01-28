let n = parseInt(prompt("Enter how many elements will have the array"));
let array = [];
for (let i = 0; i < n; i++) {
  let n1 = parseFloat(prompt("Enter a number"));
  array.push(n1);
}

function check(arr) {
  let even = [];
  let odd = [];
  let zeros = 0;
  for (let i of arr) {
    if (isNaN(i) || i === "") {
      continue;
    } else {
      if (i % 2 == 0 && i != 0) {
        even.push(i);
      } else if (i % 2 != 0) {
        odd.push(i);
      } else if (i === 0) {
        zeros++;
      }
    }
  }
  return [even, odd, zeros];
}
console.log(check(array));

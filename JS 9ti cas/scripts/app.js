let array = [4, 8, "hello", 10, 7, 53, 6, 9];

function check(a) {
  let odd = [];
  let even = [];
  for (let i = 0; i < a.length; i++) {
    if (isNaN(a[i])) {
      continue;
    } else {
      if (a[i] % 2 == 0) {
        even.push(a[i]);
      } else {
        odd.push(a[i]);
      }
    }
  }
  return [odd, even];
}
let res = check(array);
console.log(res);

let array = [
  "hello",
  "world",
  "john",
  "kenedy",
  "john kenedy",
  9,
  10,
  null,
  false,
  NaN,
];

function check(arr) {
  for (let i of arr) {
    if (!isNaN(i)) {
      continue;
    } else if (i) {
      if (i.length > 10) {
        return i;
      }
    }
  }
}

console.log(check(array));

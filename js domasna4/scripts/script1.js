var array = [];
for (let i = 0; i < 5; i++) {
  var number = parseInt(prompt("Enter a number first array"));
  array.push(number);
}
var array2 = [];
for (let i = 0; i < 5; i++) {
  var number1 = prompt("Enter a number for second array");
  array2.push(number1);
}

var array3 = [1, "hello", false, 4, 7];

function sumNumber(arr, x) {
  let sum = 0;
  for (let a of arr) {
    let message = x(a);
    if (message === "ERROR") {
      sum = message;
      break;
    } else sum += a;
  }
  return sum;
}

function validateNumber(a) {
  if (typeof a !== "number") {
    return "ERROR";
  }
}

var sumN = sumNumber(array, validateNumber);
var sumN2 = sumNumber(array2, validateNumber);
var sumN3 = sumNumber(array3, validateNumber);
console.log(sumN, sumN2, sumN3);

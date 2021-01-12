var array = [3, 5, "hello", 8, 11];

function sumNumbers(arr, x, y) {
  let minim = x(arr);
  let maxim = y(arr);
  let sum = minim + maxim;
  return sum;
}

function minNumber(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      continue;
    } else {
      if (min > arr[i]) {
        min = arr[i];
      }
    }
  }
  return min;
}
function maxNumber(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      continue;
    } else {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
  }
  return max;
}

var res = sumNumbers(array, minNumber, maxNumber);
document.write(res);

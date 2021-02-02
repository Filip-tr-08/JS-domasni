let array = [0, 2, 5, 4, 6, 8];
function dashes(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      continue;
    }
    if (arr[i - 1] % 2 === 0 && arr[i] % 2 === 0) {
      result.push("-", arr[i]);
    } else if (arr[i] === 0) {
      result.push(arr[i]);
    } else {
      result.push(arr[i]);
    }
  }
  console.log(result);
}
dashes(array);

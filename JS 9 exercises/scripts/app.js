let array1 = [2, 5, ["a", "b", "c"], "sedc"];
let array2 = [2, NaN, 7, ["a", "b", "c"], null, "sedc", 0];

function check(arr) {
  let newArray = [];
  for (let i of arr) {
    if (!!i) {
      newArray.push(i);
    }
  }
  return newArray;
}
console.log(check(array1));
console.log(check(array2));

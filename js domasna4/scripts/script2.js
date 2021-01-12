var array = ["Hello", "there", "students", "of", "SEDC"];
function print(x) {
  let result = ``;
  for (let i = 0; i < x.length; i++) {
    result += `${x[i]} `;
  }
  return result;
}
var res = print(array);
document.write(res);

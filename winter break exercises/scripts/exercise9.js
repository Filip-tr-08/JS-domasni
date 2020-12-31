var n1 = parseInt(prompt("Type a number:"));
function check(x) {
  let = result = x % 3;
  let message;
  if (result == 0) {
    message = `The number ${x} is divisible by 3`;
  } else {
    message = `The number ${x} is not divisible by 3;`;
  }
  return message;
}
var res = check(n1);
document.write(res);

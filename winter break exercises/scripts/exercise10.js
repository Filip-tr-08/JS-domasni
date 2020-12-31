var a = prompt("Type a string:");
function check(x) {
  let b = x.substring(0, 1);
  if (b == "a" || b == "e" || b == "i" || b == "o" || b == "u") {
    x = "Hit" + x + "Hit";
  } else {
    x = x;
  }
  return x;
}
var res = check(a);
document.write(res);

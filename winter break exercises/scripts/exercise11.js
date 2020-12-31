var a = prompt("Type a string:");
function check(x) {
  let b = x.substring(a.length - 2, a.length);
  let message;
  if (b == "na") {
    message = "Hit";
  } else {
    message = "No Hit";
  }
  return message;
}
var c = check(a);
document.write(c);

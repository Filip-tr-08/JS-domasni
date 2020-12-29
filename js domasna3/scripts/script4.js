var money = parseFloat(prompt("How much money do you have?"));
var take = parseFloat(prompt("How much money do you want to take?"));
function ATM(x, y) {
  let message;
  sub = x - y;
  if (x - y < 0) {
    message = "Not enough money";
  } else {
    message = `You have withdrawn ${y} money and now you have ${sub} left`;
  }
  return message;
}
var machine = ATM(money, take);
document.write(machine);

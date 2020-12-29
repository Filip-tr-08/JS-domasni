var b = parseInt(prompt("How many boys are in the team?"));
var g = parseInt(prompt("How many girls are in the team?"));
if (b < 10) {
  b = `0${b}`;
} else {
  b = b;
}
if (g < 10) {
  g = `0${g}`;
} else {
  g = g;
}
function team(x, y) {
  console.log(`${x} girls ${y} boys`);
}
team(g, b);

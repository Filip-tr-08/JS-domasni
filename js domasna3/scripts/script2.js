var dog = parseInt(prompt("How old is your dog?"));
var hdog = parseInt(prompt("How old is your dog in dog years?"));
function dogYears(x) {
  let dyears = x * 7;
  return dyears;
}
function humanYears(y) {
  let hyears = Math.floor(y / 7);
  return hyears;
}
var dogY = dogYears(dog);
var humY = humanYears(hdog);
document.write(`Your dog's age is ${dogY} in dog years.`);
document.write(`<br>Your dog's age is ${humY} in human years.`);

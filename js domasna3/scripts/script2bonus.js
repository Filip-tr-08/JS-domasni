var dog = parseInt(prompt("How old is your dog?"));
var hdog = parseInt(prompt("How old is your dog in dog years?"));
function dogYears(x, y) {
  let dyears = x * 7;
  let hyears = Math.floor(y / 7);
  return [dyears, hyears];
}

var years = dogYears(dog, hdog);
var dogY = years[0];
var humY = years[1];

document.write(`Your dog's age is ${dogY} in dog years.`);
document.write(`<br>Your dog's age is ${humY} in human years.`);

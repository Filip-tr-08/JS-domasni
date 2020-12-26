var year = parseInt(prompt("Which year you were born:"));
var zodiac = (year - 4) % 12;
if (zodiac === 0) {
  alert("You are a Rat");
} else if (zodiac === 1) {
  alert("You are an Ox");
} else if (zodiac === 2) {
  alert("You are a Tiger");
} else if (zodiac === 3) {
  alert("You are a Rabbit");
} else if (zodiac === 4) {
  alert("You are a Dragon");
} else if (zodiac === 5) {
  alert("You are a Snake");
} else if (zodiac === 6) {
  alert("You are a Horse");
} else if (zodiac === 7) {
  alert("You are a Goat");
} else if (zodiac === 8) {
  alert("You are a Monkey");
} else if (zodiac === 9) {
  alert("You are a Rooster");
} else if (zodiac === 10) {
  alert("You are a Dog");
} else if (zodiac === 11) {
  alert("You are a Pig");
} else {
  alert("ERROR");
}

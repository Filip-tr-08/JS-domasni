var year = parseInt(prompt("Which year you were born?"));
var zodiac = (year - 4) % 12;
switch (zodiac) {
  case (zodiac = 0):
    alert("You are a Rat");
    break;
  case (zodiac = 1):
    alert("You are an Ox");
    break;
  case (zodiac = 2):
    alert("You are a Tiger");
    break;
  case (zodiac = 3):
    alert("You are a Rabbit");
    break;
  case (zodiac = 4):
    alert("You are a Dragon");
    break;
  case (zodiac = 5):
    alert("You are a snake");
    break;
  case (zodiac = 6):
    alert("You are a Horse");
    break;
  case (zodiac = 7):
    alert("You are a Goat");
    break;
  case (zodiac = 8):
    alert("You are a Monkey");
    break;
  case (zodiac = 9):
    alert("You are a Rooster");
    break;
  case (zodiac = 10):
    alert("You are a Dog");
    break;
  case (zodiac = 11):
    alert("You are a Pig");
    break;
  default:
    alert("ERROR");
    break;
}

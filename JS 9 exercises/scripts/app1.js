let n = parseFloat(prompt("Enter a number"));

function check(x) {
  let counter = 0;
  if (isNaN(x) || x == "") {
    alert("Please enter a number");
  } else {
    if (x > 0) {
      console.log(`${x} is a positive number`);
    } else {
      console.log(`${x} is a negative number`);
    }
    if (x % 2 == 0) {
      console.log(`${x} is a even number`);
    } else {
      console.log(`${x} is a odd number`);
    }
    while (x != 0) {
      x = parseInt(x / 10);
      counter++;
    }
    console.log(`${counter}`);
  }
}
check(n);

var x = ``;
for (let i = 0; i <= 20; i++) {
  var check = i % 2;
  if (check === 0) {
    x += `\n ${i}`;
  } else {
    x += ` ${i}`;
  }
}
console.log(x);

var x = ``;
for (let i = 1; i <= 20; i++) {
  var check = i % 2;
  if (check === 0) {
    x += `${i}\n`;
  } else {
    x += `${i} `;
  }
}
console.log(x);

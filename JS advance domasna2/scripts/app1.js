let firstNames = ["Filip", "Petko", "Stanko", "Mirko"];
let lastNames = ["Trajanovski", "Petkovski", "Stankovski", "Mirkovski"];

//   ============ for loop in IIFE function =============
// (function (x, y) {
//   array = [];
//   for (let i = 0; i < x.length; i++) {
//     let fullname = `${x[i]} ${y[i]}`;
//     array.push(fullname);
//   }
//   console.log(array);
// })(firstNames, lastNames);

// ============ IIFE function in for loop ================
for (let i = 0; i < firstNames.length; i++) {
  let fullname;
  (function (x, y) {
    fullname = `${x[i]} ${y[i]}`;
  })(firstNames, lastNames);
  console.log(fullname);
}

var firstNames = ["Bob", "Jill"];
var lastNames = ["Gregory", "Wurts"];
function fullNames(x, y) {
  let full = [];
  for (let i = 0; i < x.length + 1; i++) {
    let fn = x.splice(0, 1);
    let fl = y.splice(0, 1);
    full.push(`${i + 1}.${fn} ${fl}`);
  }
  console.log(full);
}
fullNames(firstNames, lastNames);

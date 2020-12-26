// Homework 2 exercise 1
var n1 = parseInt(prompt("Vnesi go prviot broj"));
var n2 = parseInt(prompt("Vnesi go vtoriot broj"));
var n3 = parseInt(prompt("Vnesi go tretiot broj"));
var n4 = parseInt(prompt("Vnesi go cetvrtiot broj"));
var n5 = parseInt(prompt("Vnesi go petiot broj"));

if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
  alert("Prviot broj: " + n1 + " e najgolem!");
} else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
  alert("Vtoriot broj: " + n2 + " e najgolem!");
} else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
  alert("Tretiot broj: " + n3 + " e najgolem!");
} else if (n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
  alert("Cetvriot broj: " + n4 + " e najgolem!");
} else if (n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4) {
  alert("Petiot broj: " + n5 + " e najgolem!");
}

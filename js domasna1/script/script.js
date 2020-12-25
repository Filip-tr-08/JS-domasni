// Homework part 1 first exercise
var variable1 = 56;
var variable2 = true;
var variable3 = "Domasna 1 JS";
var variable4 = null;
var variable5 = [1, 5, 6];
var variable6;
document.write(
  "Prva promenliva: " +
    variable1 +
    " -- e tip : " +
    typeof variable1 +
    "<br>Vtora promenliva: " +
    variable2 +
    " -- e tip : " +
    typeof variable2 +
    "<br>Treta Promenliva: " +
    variable3 +
    " -- e tip : " +
    typeof variable3 +
    "<br>Cetvrta promenliva: " +
    variable4 +
    " -- e tip: " +
    typeof variable4 +
    "<br>Petta promenliva: " +
    "[" +
    variable5 +
    "]" +
    " -- e tip: " +
    typeof variable5 +
    "<br> Sesta promenliva: " +
    variable6 +
    " -- e tip: " +
    typeof variable6
);

// Homework part 1 second exercise

var phones = 30;
var price = 119.95;
var tax = 5 / 100;
var precentage = price * tax;
var taxPrice = price + precentage;
document.write(
  "<br><br> Cena na eden telefon bez danok e: " +
    price +
    "$ , dodeka cenata na telefonot so danok 5% e: " +
    taxPrice +
    "$"
);
var fullPrice = phones * price;
document.write("<br>Cenata za 30 telefoni e: " + fullPrice + "$");

//Homework part 1 second exercise bonus

var numPhones = 30;
var inputPrice = prompt(
  "Vnesi kolkava e cenata na eden telefon (za vtora vezba bonusot!):"
);
var inputTax = prompt(
  "Vnesi kolkav danok ima na eden telefon (za vtora vezba bonusot): "
);
var percTax = parseInt(inputTax) / 100;

var precent = inputPrice * percTax;
var completePrice = parseInt(inputPrice) + precent;
document.write(
  "<br><br> Cena na eden telefon bez danok e: " +
    inputPrice +
    "$ , dodeka cenata na telefonot so danok " +
    inputTax +
    "%" +
    " e: " +
    completePrice +
    "$"
);
var fullPrice2 = numPhones * completePrice;
document.write("<br>Cenata za 30 telefoni e: " + fullPrice2 + "$");

//Homework part 2 third exercise

const pi = 3.14;
var radius = prompt("Vnesi radius na krugot (za treta vezba):");
var area = parseInt(radius) * parseInt(radius) * pi;
document.write(
  "<br><br>Plostinata na krugot so radius = " +
    radius +
    " e ednakva na: " +
    area
);

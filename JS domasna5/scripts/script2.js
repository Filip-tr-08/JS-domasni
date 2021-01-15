let array = [];
let n = parseInt(prompt("How much numbers do you wish to enter:"));
let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

function printNumber(arr, d1, d2, d3, x) {
  d1.innerHTML = `<h3>The array with ${x} elements is:</h3>`;

  let ul = document.createElement("ul");
  let sum = 0;
  let sumString = "";
  for (let i = 0; i < x; i++) {
    arr[i] = parseFloat(prompt("Enter a number"));
    sum += arr[i];
    if (x - 1 == i) {
      sumString += `${arr[i]} = `;
    } else {
      sumString += `${arr[i]} + `;
    }

    let item = document.createElement("li");
    item.innerText = ` ${arr[i]}`;
    ul.appendChild(item);
  }
  d1.appendChild(ul);
  d2.innerHTML = `<h3>The sum of the array is: ${sum} </h3>`;
  d3.innerHTML = `<h3> The equasion is : ${sumString} ${sum}</h3>`;
}

printNumber(array, div1, div2, div3, n);

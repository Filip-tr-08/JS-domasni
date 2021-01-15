let recipeName = prompt("What is the name of the recipe?");
let ing = parseInt(prompt("How much ingredients will the recipe have?"));
let array = [];
let body = document.getElementsByTagName("body")[0];

function print(rN, ingr, arr, b) {
  let div = document.createElement("div");
  b.appendChild(div);
  let h1 = document.createElement("h1");
  h1.innerText = `${rN}`;
  div.appendChild(h1);
  let table = document.createElement("table");
  for (let i = 0; i < ingr; i++) {
    arr[i] = prompt("Enter a ingredient");
    let row = document.createElement("tr");
    let column1 = document.createElement("td");
    let column2 = document.createElement("td");
    column1.innerText = `${i + 1}`;
    column2.innerText = `${arr[i]}`;
    table.appendChild(row);
    row.appendChild(column1);
    row.appendChild(column2);
    row.style.border = "1px solid black";
    column1.style.border = "1px solid black";
    column2.style.border = "1px solid black";
    row.style.padding = "5px";
    column1.style.padding = "5px";
    column2.style.padding = "5px";
  }
  div.appendChild(table);
  table.style.border = "1px solid black";
}
print(recipeName, ing, array, body);

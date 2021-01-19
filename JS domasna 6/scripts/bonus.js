let body = document.getElementsByTagName("body")[0];
let btn = document.getElementById("submit");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let rows = parseInt(document.getElementById("rows").value);
  let cols = parseInt(document.getElementById("cols").value);
  if (isNaN(rows) || isNaN(cols)) {
    alert("Please insert a number");
  } else {
    let table = document.createElement("table");
    for (let i = 0; i < rows; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < cols; j++) {
        let col = document.createElement("td");
        col.classList.add("td");
        col.innerText = `Row-${i + 1} Column-${j + 1}`;
        row.appendChild(col);
      }
      table.appendChild(row);
    }
    body.appendChild(table);
    table.classList.add("table");
  }
});

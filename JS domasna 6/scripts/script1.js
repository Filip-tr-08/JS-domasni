let table = document.getElementById("sampleTable");
function insert_Row() {
  let row = document.createElement("tr");
  let column1 = document.createElement("td");
  let column2 = document.createElement("td");
  row.appendChild(column1);
  row.appendChild(column2);
  table.appendChild(row);
  row.style.height = "20px";
}

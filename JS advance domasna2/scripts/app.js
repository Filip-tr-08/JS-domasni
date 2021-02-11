let btn = document.getElementById("sub");
let table = document.getElementsByTagName("table")[0];
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let url1 = `https://swapi.dev/api/planets/?page=1`;
let url2 = ` https://swapi.dev/api/planets/?page=2`;

btn.addEventListener("click", (e) => {
  fetch(url1)
    .then((response) => {
      response.json().then((data) => {
        if (!data) {
          let h1 = document.createElement("h1");
          h1.innerText = "ERROR";
          e.target.parentNode.appendChild(h1);
        } else {
          empty(table);
          printPlanets(data);
          btn.classList.add("hidden");
          next.classList.remove("hidden");
          next.addEventListener("click", btnNext);
          prev.addEventListener("click", btnPrev);
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

let printPlanets = (data) => {
  for (let i = 0; i < 10; i++) {
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdPop = document.createElement("td");
    let tdCli = document.createElement("td");
    let tdGra = document.createElement("td");
    tdName.innerText = `${data.results[i].name}`;
    tdPop.innerText = `${data.results[i].population}`;
    tdCli.innerText = `${data.results[i].climate}`;
    tdGra.innerText = `${data.results[i].gravity}`;
    tr.append(tdName, tdPop, tdCli, tdGra);
    table.appendChild(tr);
  }
};

let btnNext = () => {
  fetch(url2)
    .then((response) => {
      response.json().then((data) => {
        if (!data) {
          let h1 = document.createElement("h1");
          h1.innerText = "ERROR";
          e.target.parentNode.appendChild(h1);
        } else {
          empty(table);
          printPlanets(data);
          next.classList.add("hidden");
          prev.classList.remove("hidden");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
let btnPrev = () => {
  fetch(url1)
    .then((response) => {
      response.json().then((data) => {
        if (!data) {
          let h1 = document.createElement("h1");
          h1.innerText = "ERROR";
          e.target.parentNode.appendChild(h1);
        } else {
          empty(table);
          printPlanets(data);
          next.classList.remove("hidden");
          prev.classList.add("hidden");
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
let empty = (table) => {
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
};

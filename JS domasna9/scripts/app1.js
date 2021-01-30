let body = document.getElementsByTagName("body")[0];
let btn = document.getElementById("sub");
let table = document.getElementsByTagName("table")[0];
let n = parseInt(prompt("Enter number of thr todo you want to see"));
let p = document.createElement("p");

btn.addEventListener("click", function () {
  fetch(`https://jsonplaceholder.typicode.com/todos/${n}`)
    .then((response) => {
      response.json().then((data) => {
        if (n === data.id) {
          let tr = document.createElement("tr");
          let td1 = document.createElement("td");
          let td2 = document.createElement("td");
          td1.innerText = `${data.id}`;
          td2.innerText = `${data.title}`;
          tr.appendChild(td1);
          tr.appendChild(td2);
          table.appendChild(tr);
          p.innerText = "Completed";
          body.appendChild(p);
        } else if (n !== data.id) {
          p.innerText = `Not Completed`;
          body.appendChild(p);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

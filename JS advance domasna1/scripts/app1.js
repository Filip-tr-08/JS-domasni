let btn = document.getElementById("sub");
let table = document.getElementsByTagName("table")[0];

btn.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`https://jsonplaceholder.typicode.com/users/1`)
    .then((response) => {
      response.json().then((data) => {
        if (!data) {
          let h1 = document.createElement("h1");
          h1.innerText("ERROR");
        } else {
          for (let heads in data) {
            let th = document.createElement("th");
            th.innerText = heads;
            table.append(th);
          }
          let tbody = document.createElement("tr");
          tbody.innerHTML += `<tr><td>${data.id}</td><td>${data.name}</td><td>${data.username}</td><td>${data.email}</td><td>Street: ${data.address.street}<br>${data.address.suite}<br>City: ${data.address.city}<br>Zipcode: ${data.address.zipcode}<br>Lat: ${data.address.geo.lat}<br>Lng: ${data.address.geo.lng}</td><td>${data.phone}</td><td>${data.website}</td><td>Name: ${data.company.name}<br>Catch phrase: ${data.company.catchPhrase}<br>Bs: ${data.company.bs}</td></tr>`;
          table.append(tbody);
        }
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

let post = document.getElementsByClassName("posts")[0];
let user = document.getElementsByClassName("users")[0];

async function getData(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

function validateData(data) {
  if (!data || data.length === 0) {
    throw new Error("There is no data in the json file");
  }
}

function showPost(details) {
  post.innerHTML = `<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">User ID</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${details.id}</th>
      <td>${details.userId}</td>
      <td>${details.title}</td>
      <td>${details.body}</td>
    </tr>
  </tbody>
</table>`;
}

function showUser(details) {
  user.innerHTML = `<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Website</th>
      <th scope="col">Company</th>
</tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${details.id}</th>
      <td>${details.name}</td>
      <td>${details.username}</td>
      <td>${details.email}</td>
      <td>Street:${details.address.street}<br></br>Suite:${details.address.suite}<br></br>City:${details.address.city}<br></br>Zipcode:${details.address.zipcode}<br></br>Geo: lat: ${details.address.geo.lat} -- lng: ${details.address.geo.lng}</td>
      <td>${details.phone}</td>
      <td>${details.website}</td>
      <td>Name: ${details.company.name}<br></br>Catch Phrase: ${details.company.catchPhrase}<br></br>Bs: ${details.company.bs}</td>
      </tr>
  </tbody>
</table>`;
}

async function runEverything() {
  try {
    let posts = await getData(`https://jsonplaceholder.typicode.com/posts/1`);
    validateData(posts);
    showPost(posts);
    let users = await getData(
      `https://jsonplaceholder.typicode.com/users/${posts.userId}`
    );
    validateData(users);
    showUser(users);
  } catch (error) {
    console.error(error);
  }
}
let btn = document.getElementById("sub");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  runEverything();
});

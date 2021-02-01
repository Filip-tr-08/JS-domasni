$(document).ready(function () {
  let body = $("body");
  let btnPeople = $("#btnPeople");
  let btnShips = $("#btnShips");
  let n = 1;
  let url1 = `https://swapi.dev/api/people/?page=${n}`;
  let url2 = `https://swapi.dev/api/starships/?page=${n}`;
  let btnNext = $("#btnNext");
  let btnPrev = $("#btnPrev");
  btnNext.click(function () {
    n++;
  });
  btnPrev.click(function () {
    n--;
  });
  function getPeople() {
    $.ajax({
      url: url1,
      success: function (result) {
        let table = body.append(
          `<table><tr><th>Name</th><th>Height</th><th>Mass</th><th>Gender</th><th>Birth year</th><th>Films</th></tr></table>`
        );
        for (let i = 0; i < result.results.length; i++) {
          console.log(result.results);
          table.append(
            `<tr><td>${result.results[i].name}</td><td>${result.results[i].height}</td><td>${result.results[i].mass}</td><td>${result.results[i].gender}</td><td>${result.results[i].birth_year}</td><td>${result.results[i].films}</td></tr>`
          );
        }
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
  function getShips() {
    $.ajax({
      url: url2,
      success: function (result) {
        let table = body.append(
          `<table><tr><th>Name</th><th>Model</th><th>Manufacturer</th><th>Cost</th><th>People Capacity</th><th>Class</th></tr></table>`
        );
        for (let i = 0; i < result.results.length; i++) {
          console.log(result.results);
          table.append(
            `<tr><td>${result.results[i].name}</td><td>${result.results[i].model}</td><td>${result.results[i].manufacturer}</td><td>${result.results[i].cost_in_credits}</td><td>${result.results[i].passengers}</td><td>${result.results[i].starship_class}</td></tr>`
          );
        }
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
  btnShips.click(function () {
    getShips();
  });
  btnPeople.click(function () {
    getPeople();
  });
});

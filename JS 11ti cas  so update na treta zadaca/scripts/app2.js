$(document).ready(function () {
  let divR = $("#result");
  let btnPeople = $("#btnPeople");
  let btnShips = $("#btnShips");
  let nextP;
  let nextS;
  let prevP;
  let prevS;
  let table = divR.append(`<table></table>`);
  let url1 = `https://swapi.dev/api/people/?page=1`;
  let url2 = `https://swapi.dev/api/starships/?page=1`;
  let btnNext = $("#btnNext");
  let btnPrev = $("#btnPrev");
  let b = false;

  function getPeople() {
    b = false;
    $.ajax({
      url: url1,
      success: function (result) {
        if (!!result.next) {
          nextP = result.next;
        }
        if (!!result.previous) {
          prevP = result.previous;
        }
        table.empty();
        table.append(
          `<tr><th>Name</th><th>Height</th><th>Mass</th><th>Gender</th><th>Birth year</th><th>Films</th></tr>`
        );
        console.log(result.results);
        for (let i = 0; i < result.results.length; i++) {
          table.append(
            `<tr><td>${result.results[i].name}</td><td>${result.results[i].height}</td><td>${result.results[i].mass}</td><td>${result.results[i].gender}</td><td>${result.results[i].birth_year}</td><td>${result.results[i].films.length}</td></tr>`
          );
        }
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
  function getShips() {
    b = true;
    $.ajax({
      url: url2,
      success: function (result) {
        if (!!result.next) {
          nextS = result.next;
        }
        if (!!result.previous) {
          prevS = result.previous;
        }
        table.empty();
        table.append(
          `<tr><th>Name</th><th>Model</th><th>Manufacturer</th><th>Cost</th><th>People Capacity</th><th>Class</th></tr>`
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
  btnNext.click(function () {
    if (b === false) {
      $.ajax({
        url: nextP,
        success: function (result) {
          if (!!result.next) {
            nextP = result.next;
          }
          if (!!result.previous) {
            prevP = result.previous;
          }
          table.empty();
          table.append(
            `<table><tr><th>Name</th><th>Height</th><th>Mass</th><th>Gender</th><th>Birth year</th><th>Films</th></tr></table>`
          );
          for (let i = 0; i < result.results.length; i++) {
            console.log(result.results);
            table.append(
              `<tr><td>${result.results[i].name}</td><td>${result.results[i].height}</td><td>${result.results[i].mass}</td><td>${result.results[i].gender}</td><td>${result.results[i].birth_year}</td><td>${result.results[i].films.length}</td></tr>`
            );
          }
        },
        error: function (err) {
          console.log(err);
        },
      });
    } else if (b === true) {
      $.ajax({
        url: nextS,
        success: function (result) {
          if (!!result.next) {
            nextS = result.next;
          }
          if (!!result.previous) {
            prevS = result.previous;
          }
          table.empty();
          table.append(
            `<tr><th>Name</th><th>Model</th><th>Manufacturer</th><th>Cost</th><th>People Capacity</th><th>Class</th></tr>`
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
  });
  btnPrev.click(function () {
    if (b === false) {
      $.ajax({
        url: prevP,
        success: function (result) {
          if (!!result.next) {
            nextP = result.next;
          }
          if (!!result.previous) {
            prevP = result.previous;
          }
          table.empty();
          table.append(
            `<table><tr><th>Name</th><th>Height</th><th>Mass</th><th>Gender</th><th>Birth year</th><th>Films</th></tr></table>`
          );
          for (let i = 0; i < result.results.length; i++) {
            console.log(result.results);
            table.append(
              `<tr><td>${result.results[i].name}</td><td>${result.results[i].height}</td><td>${result.results[i].mass}</td><td>${result.results[i].gender}</td><td>${result.results[i].birth_year}</td><td>${result.results[i].films.length}</td></tr>`
            );
          }
        },
        error: function (err) {
          console.log(err);
        },
      });
    } else if (b === true) {
      $.ajax({
        url: prevS,
        success: function (result) {
          if (!!result.next) {
            nextS = result.next;
          }
          if (!!result.previous) {
            prevS = result.previous;
          }
          table.empty();
          table.append(
            `<tr><th>Name</th><th>Model</th><th>Manufacturer</th><th>Cost</th><th>People Capacity</th><th>Class</th></tr>`
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
  });
});

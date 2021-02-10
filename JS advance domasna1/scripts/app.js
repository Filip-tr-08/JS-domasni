$(document).ready(function () {
  let btn = $("#sub");
  let ul = $("ul");
  let url = `https://api.openaq.org/v1/cities`;
  btn.click(function (e) {
    e.preventDefault();
    $.ajax({
      url: url,
      success: (response) => {
        check(response);
        forFunction(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  });

  let forFunction = function (response) {
    for (let i = 0; i < 10; i++) {
      ul.append(
        `<li> Country : ${response.results[i].country} -  Name: ${response.results[i].name} - City: ${response.results[i].city} - Count: ${response.results[i].count} - Locations: ${response.results[i].locations} </li>`
      );
    }
  };

  let check = function (response) {
    if (response.results != null) {
      return;
    }
  };
});

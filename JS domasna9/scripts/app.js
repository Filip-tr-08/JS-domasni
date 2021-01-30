$(document).ready(function () {
  let btn = $("#sub");
  let table = $("table");
  let n = parseInt(prompt("Enter number of thr todo you want to see"));
  function getTodo(n) {
    $.ajax({
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      url: `https://jsonplaceholder.typicode.com/todos/${n}`,
      success: function (result) {
        table.append(`<tr><td>${result.id}</td><td>${result.title}</td></tr>`);
        table.after(`<p>Completed</p>`);
      },
      error: function (err) {
        btn.after(`<p>Not Completed</p>`);
      },
    });
  }
  btn.click(function () {
    getTodo(n);
  });
});

$(document).ready(function () {
  let button = $(".sub");
  button.click(function (e) {
    e.preventDefault();
    let input = $("input");
    let value = $("#name").val();
    let text1 = $("p");
    if (value == "" || !isNaN(value)) {
      input.addClass("err");
      text1.addClass("show");
    } else {
      input.removeClass("err");
      text1.removeClass("show");

      let text = button.after(`<h1>Hello there ${value}!</h1>`);
    }
  });
});

$(document).ready(function () {
  function isColor(string) {
    let str = new Option().style;
    str.color = string;
    return str.color == string;
  }
  let text = $("#text");
  let color = $("#color");
  $(".sub").click(function (e) {
    e.preventDefault();

    let h3;
    if (isColor(color.val()) == false || text.val() === "") {
      $(".res").after(
        `<h3>Error!!! You have inserted invalid color or empty text..</h3`
      );
      h3 = $("h3");
    } else if (isColor(color.val()) == true) {
      $(".res").after(`<h3>${text.val()}</h3>`);
      h3 = $("h3");
      h3.css("color", `${color.val()}`);
    }
  });
  let reset = $(".res");
  reset.click(function (e) {
    $("h3").text("");
  });
});

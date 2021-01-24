$(document).ready(function () {
  let btn = $("#click");
  btn.click(function (e) {
    e.preventDefault();
    let n1 = parseInt($("#n1").val());
    let n2 = parseInt($("#n2").val());
    let n3 = parseInt($("#n3").val());
    let sum = n1 + n2 + n3;
    let average = sum / 3;

    if (average >= 10) {
      $("h1").append(average).css("color", "green");
    } else if (average < 10) {
      $("h1").append(average).css("color", "red");
    }
  });
  let reset = $("#reset");
  reset.click(function (e) {
    $("h1").text("");
  });
});

$(document).ready(function () {
  let select = $("#myColor");
  $("input").click(function (e) {
    e.preventDefault();
    select.children("option").remove();
    select.append(
      '<option value"" selected>Choose a color</option><option value="Yellow">Yellow </option>'
    );
  });
  select.change(function (e) {
    let selected = $("#myColor option:selected").val();
    let h2 = $("#content");
    h2.append(selected);
  });
});

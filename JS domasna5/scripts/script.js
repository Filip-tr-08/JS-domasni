let div = document.getElementById("first");
let h1 = div.children[0];
h1.textContent = "This heading is changed ";
let paragraph = h1.nextElementSibling;
paragraph.textContent = "This sibling paragraph is changed too";
let paragraph2 = document.getElementsByClassName("second")[0];
paragraph2.textContent =
  "This second paragraph is changed using its class atribute";
let text = document.getElementsByTagName("text")[0];
text.textContent = "This is changed using the tag name text";

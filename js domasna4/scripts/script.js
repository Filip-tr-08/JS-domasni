var array = ["Filip", "happy", "playing"];
function tellStory(x) {
  let string = `This is ${x[0]}. ${x[0]} is a nice person. Today they are ${x[1]}. They are ${x[2]} all day. The end.`;
  return string;
}
var value = tellStory(array);
alert(value);

function checkString(string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof string !== "string") {
        reject(string);
      } else {
        resolve(`${string.toUpperCase()}`);
      }
    }, 4000);
  });
}
checkString("hello")
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

checkString(56)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

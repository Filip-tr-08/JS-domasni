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
async function callFunction(n) {
  let result = await checkString(n);
  console.log(result);
}
callFunction("hello");
callFunction(56);

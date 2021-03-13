const fs = require("fs");
const jsonFile = "students.json";

module.exports = {
  writeFile: function (text) {
    fs.writeFile(jsonFile, text, function (err) {
      if (err) {
        console.log(`Error: ${err}`);
        return;
      }
      console.log("The file was saved successfully!");
    });
  },

  readAndParseJsonFile: function () {
    let content = fs.readFileSync(jsonFile, { encoding: "utf-8" });
    return JSON.parse(content);
  },
};

const fs = require("node:fs");

const fileName = "db.jason";
const defaultData = {
  koders: [],
};

function init() {
  if (!fs.existsSync(fileName)) {
    fs.writeFileSync(fileName, JSON.stringify(defaultData));
  }
}

function read() {
  const dbAsString = fs.readFileSync(fileName, "utf8");
    return JSON.parse(dbAsString);
}

module.exports = {
  init,
}
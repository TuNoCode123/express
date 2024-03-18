const path = require("path");
const conFigViewEngine = (app) => {
  app.set("views", path.join("rest", "view"));
  app.set("view engine", "ejs");
};
module.exports = conFigViewEngine;

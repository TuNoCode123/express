const express = require("express");
const path = require("path");
const conFigStaticFile = (app) => {
  app.use(express.static(path.join("rest", "public")));
};
module.exports = conFigStaticFile;

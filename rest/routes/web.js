const express = require("express");
const router = express.Router();
router.get("/abc", (req, res) => {
  res.render("sample");
});
router.get("/", (req, res) => {
  res.send("Hello World!dafsafasf6546fasfasd");
});
module.exports = router;

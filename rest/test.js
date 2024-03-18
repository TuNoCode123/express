const express = require("express");
const app = express();
const path = require("path");
const configViewEngine = require("./config/configviewengine");
const configStaticFile = require("./config/configstaticfile");
const webRouter = require("./routes/web");
require("dotenv").config();
const port = process.env.PORT;
configViewEngine(app);
configStaticFile(app);
app.use("/", webRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
console.log(path.join("./view", "sample"));

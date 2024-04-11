const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/index");
// app.use({extended:cors});
app.use("/", routes);

app.listen(5000, () => {
  console.log("Port listening in 5000");
});

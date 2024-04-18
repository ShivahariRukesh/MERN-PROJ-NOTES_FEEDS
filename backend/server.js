const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOption");
const cookieParser = require("cookie-parser");
const { logger } = require("./middleware/logger");
const errorHandler = require("./middleware/errHandler");
const routes = require("./routes/index");

app.use(cors(corsOptions));

app.use("This shows the requests", logger);
app.use(express.json());

app.use(cookieParser());
app.use("/", routes);

app.all("*", (req, res) => {
  res.send("ERRor 404, Page Not Found");
});

app.use(errorHandler);
app.listen(5000, () => {
  console.log("Port listening in 5000");
});

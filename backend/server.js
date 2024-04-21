const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = require("./config/corsOption");
const cookieParser = require("cookie-parser");

const connectMongoDB = require("./config/connectMongo");
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errHandler");
const routes = require("./routes/index");

require("dotenv").config();

app.use(cors(corsOptions));

app.use("This shows the requests", logger);
app.use(express.json());

app.use(cookieParser());
connectMongoDB();
app.use("/", routes);

app.all("*", (req, res) => {
  res.send("ERRor 404, Page Not Found");
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to Database");

  app.listen(5000, () => {
    console.log("Port listening in 5000");
  });
});

//Provides an errorlog whenever mongoError is seen
mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t ${err.syscall} \t${err.hostname}`,
    "mongoErrLog.log"
  );
});

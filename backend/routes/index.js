const routes = require("express").Router();

routes.get("/getPost", (req, res, next) => {
  res.send("<p>I aint back friend</p>");
});

module.exports = routes;

const routes = require("express").Router();

const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

routes.get("/getUsers", getAllUsers);
routes.post("/createUser", createUser);
routes.put("/updateUser", updateUser);
routes.delete("/deleteUser", deleteUser);
module.exports = routes;

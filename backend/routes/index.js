const routes = require("express").Router();

const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");

const { createNote } = require("../controllers/noteController");

//UserRoutes
routes.get("/getUsers", getAllUsers);
routes.post("/createUser", createUser);
routes.put("/updateUser", updateUser);
routes.delete("/deleteUser", deleteUser);

//NoteRoutes
routes.post("/createNote", createNote);
module.exports = routes;

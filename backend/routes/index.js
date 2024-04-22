const routes = require("express").Router();
const userSchema = require("../models/User");

routes.get("/getUsers", async (req, res, next) => {
  try {
    const getUsers = await userSchema.find();
    res.status(200).json({ msg: "Lists of Users", getUsers });
  } catch (err) {
    console.log("Error while fetching all users data", err);
  }
});

routes.post("/createUser", async (req, res) => {
  const { username, password, roles, active } = req.body;

  try {
    const createUser = await userSchema.create({
      username,
      password,
      roles,
      active,
    });
    resUser = { ...createUser, password: "" };
    console.log(createUser);

    return res.status(200).json({ msg: "Successfully create a user", resUser });
  } catch (err) {
    console.log("Error when creating user", err);
  }
});
module.exports = routes;

const bcrypt = require("bcrypt");

const userSchema = require("../models/User");
const noteSchema = require("../models/Note");

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userSchema.find().select("-password").lean(); //Returns without password and converts the response  to plain object format

    res.status(200).json({ msg: "Lists of Users", users });
  } catch (err) {
    console.log("Error while fetching all users data", err);
  }
};

const createUser = async (req, res) => {
  const { username, password, roles } = req.body;

  const duplicate = await userSchema.findOne({ username });
  if (duplicate) {
    return res.status(409).json({ msg: "Username Already Exists" });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  try {
    const createUser = await userSchema.create({
      username,
      password: hashPassword,
      roles,
    });

    return res.status(200).json({ msg: "Successfully create a user" });
  } catch (err) {
    console.log("Error when creating user", err);
  }
};

const updateUser = async (req, res) => {
  const { id, username, roles, active, password } = req.body;

  const user = await userSchema.findById(id); //user object, which is an instance of the User model in Mongoose.

  if (!user) {
    return res.status(400).json({ msg: "Username not found" });
  }

  const duplicate = await userSchema.findOne({ username }).lean();
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ msg: "Duplicate Username" });
  }

  user.username = username;
  user.roles = roles;
  user.active = active;

  if (password) user.password = await bcrypt(password, 10);

  // In Mongoose, when you retrieve a document from the database using a model's static method like User.findById(id),
  //the returned document is an instance of the model class. This means that the document inherits all the methods and properties defined on the model.

  //If you want to update from the 'User' model itself then use User.findByIdAndUpdate(id,{}) method.
  const updatedUser = await user.save();

  return res.status(200).json({
    msg: `successfully updated with new Username:${updatedUser?.username}`,
  });
};

const deleteUser = async (req, res) => {
  const { id } = req.body;

  const notes = await noteSchema.findOne({ user: id }).lean;

  if (notes?.length) {
    res.status(400).json({ msg: "Cannot delete the user having notes" });
  }

  const user = await userSchema.findById(id);
  if (!user) {
    return res.status(400).json("User not found");
  }
  const delRes = await user.deleteOne();

  return res
    .status(200)
    .json({ msg: `Username:${delRes.username} has been deleted` });
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };

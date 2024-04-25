const noteSchema = require("../models/Note");

const createNote = async (req, res) => {
  const { id, title, description } = req.body;
  try {
    const createNote = await noteSchema.create({
      users: id,
      title,
      description,
    });

    return res.status(200).json({ msg: "Note created", data: createNote });
  } catch (err) {
    console.log("Error while creating the note", err);
  }
};

module.exports = { createNote };

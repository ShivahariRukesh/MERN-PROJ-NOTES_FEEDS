const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const noteSchema = new mongoose.Schema(
  {
    users: {
      type: mongoose.Schema.Types.ObjectId, //Like a foreign key ID
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, //Provides the date of created and updated
  }
);

noteSchema.plugin(AutoIncrement, {
  inc_field: "ticket",
  id: "ticketNums",
  start_seq: 500,
});

module.exports = mongoose.model("notes", noteSchema);

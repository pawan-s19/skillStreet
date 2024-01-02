const { Schema, model } = require("mongoose");

const noteSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: [10, "Title cannot exceed 10 characters"],
    },
    content: {
      type: String,
      required: true,
      maxLength: [40, "Content cannot exceed 40 characters"],
    },
  },
  { timestamps: true }
);

module.exports = model("notes", noteSchema);

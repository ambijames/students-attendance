const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const student = new Schema(
  {
    email: {
      type: String,
      required: true,
      immutable: true,
    },
    fullName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = { Student: model("student", student) };

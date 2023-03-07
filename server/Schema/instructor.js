const mongoose = require("mongoose");

const instructor = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Experience: {
    type: String,
    required: true,
  },
});

const Instructor = new mongoose.model("Instructor", instructor);

module.exports = Instructor;

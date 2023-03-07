const mongoose = require("mongoose");

const course = new mongoose.Schema({
  Name: {
    type: String,
    unique: true,
    required: true,
  },
  Level: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
});

const Courses = new mongoose.model("Courses", course);

module.exports = Courses;

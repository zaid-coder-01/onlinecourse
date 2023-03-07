const mongoose = require("mongoose");

const lecture = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  instructorName: {
    type: String,
    required: true,
  },
  Batch: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
});

const Lecture = new mongoose.model("Lecture", lecture);

module.exports = Lecture;

const mongoose = require("mongoose");

const bat = new mongoose.Schema({
  batchName: {
    type: String,
    required: true,
    unique: true,
  },
  courseName: {
    type: String,
    required: true,
  },
});

const Batch = new mongoose.model("Batch", bat);

module.exports = Batch;

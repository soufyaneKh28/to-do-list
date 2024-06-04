const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    require: true,
    default: false,
  },
});

module.exports = mongoose.model("ToDo", todoSchema);

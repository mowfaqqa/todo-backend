const mongoose = require("mongoose");
// MODEL TO CREATE TODO
const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name of todo"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// VALIDATION

module.exports = mongoose.model("Todo", TodoSchema);

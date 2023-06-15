const mongoose = require("mongoose");

const analytics = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("analytics", analytics);

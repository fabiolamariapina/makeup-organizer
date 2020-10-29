const mongoose = require("mongoose");

const makeupSchema = new mongoose.Schema({
  type: String,
  name: { type: String, required: true },
  img: String,
  shade: String,
  tags: String,
  buyMore: Boolean,
});

const Makeup = mongoose.model("Makeup", makeupSchema);

module.exports = Makeup;

const mongooose = require("mongoose");

const makeupSchema = new mongooose.Schema({
  type: String,
  name: { type: String, required: true },
  img: String,
  shade: String,
  buyMore: Boolean,
  tags: String,
});

const Makeup = mongoose.model("Makeup", makeupSchema);

module.exports = Makeup;

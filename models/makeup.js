const mongooose = require("mongoose");

const makeupSchema = new mongooose.Schema({
  type: String,
  name: { type: String, required: true },
  img: String,
  shade: String,
  tags: String,
  buyMore: Boolean,
});

const Makeup = mongoose.model("Makeup", makeupSchema);

module.exports = Makeup;

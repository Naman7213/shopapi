const mongoose = require("mongoose");

const equipments_schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  bid: mongoose.Schema.Types.String,
  title: mongoose.Schema.Types.String,
  desc: mongoose.Schema.Types.String,
  price: mongoose.Schema.Types.Number,
  image: mongoose.Schema.Types.Array,
  quantity: mongoose.Schema.Types.Number,
});

module.exports = mongoose.model("equipments", equipments_schema);

const express = require("express");
const { default: mongoose } = require("mongoose");
const equipments_router = express();
const equipments = require("../models/equipments");

equipments_router.get("/", async (req, res) => {
  try {
    const items = await equipments.find();
    res.status(200).json(items);
  } catch {
    res.status(500).json({ message: "Error Occured" });
  }
});

equipments_router.post("/", (req, res) => {
  const new_equipments = new equipments({
    _id: new mongoose.Types.ObjectId(),
    bid: req.body.bid,
    title: req.body.title,
    desc: req.body.desc,
    price: req.body.price,
    image: req.body.image,
    quantity: req.body.quantity,
  });
  new_equipments
    .save()
    .then((result) => {
      res.status(201).json({ message: "POST to DB", createdProduct: result });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = equipments_router;

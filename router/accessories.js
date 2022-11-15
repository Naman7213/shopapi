const express = require("express");
const { default: mongoose } = require("mongoose");
const accessories_router = express();
const accessories = require("../models/accessories");

accessories_router.get("/", async (req, res) => {
  try {
    const items = await accessories.find();
    res.status(200).json(items);
  } catch {
    res.status(500).json({ message: "Error Occured" });
  }
});

accessories_router.post("/", (req, res) => {
  const new_accessories = new accessories({
    _id: new mongoose.Types.ObjectId(),
    aid: req.body.aid,
    title: req.body.title,
    desc: req.body.desc,
    price: req.body.price,
    image: req.body.image,
    quantity: req.body.quantity,
  });
  new_accessories
    .save()
    .then((result) => {
      res.status(201).json({ message: "POST to DB", createdProduct: result });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

module.exports = accessories_router;

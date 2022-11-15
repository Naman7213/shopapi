const express = require("express");
const app = express();
const accessories = require("./router/accessories");
const equipments = require("./router/equipments");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/accessories", accessories);
app.use("/equipments", equipments);

module.exports = app;

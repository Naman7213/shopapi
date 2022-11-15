const mongoose = require("mongoose");

const DB =
  "mongodb+srv://namanv08:NAMAN2002@cluster0.v25ib6r.mongodb.net/shop?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection With Database Successful");
  })
  .catch((err) => {
    console.log(err);
  });

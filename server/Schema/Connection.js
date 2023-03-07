const mongoose = require("mongoose");

const con = mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect");
  })
  .catch((err) => {
    console.log(err);
  });

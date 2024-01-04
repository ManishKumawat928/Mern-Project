const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const db = process.env.DATABASE;
mongoose
  .connect(db)
  .then(() => console.log("Connection Sucessfully"))
  .catch((e) => console.log(e));

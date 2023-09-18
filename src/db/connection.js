const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://hmsATcca:hmsATcca@hms.8jsmbrw.mongodb.net/OPD", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => console.log("db Connected"))
  .catch((err) => console.log(err));

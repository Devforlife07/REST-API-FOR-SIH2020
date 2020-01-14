const mongoose = require("mongoose");

function initiailize() {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("MONGODB CONNECTED");
    })
    .catch(err => {
      console.log(err);
    });
}
module.exports = initiailize;

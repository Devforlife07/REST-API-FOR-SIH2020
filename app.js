const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const app = express();
const rep = require("./model/random");
dotenv.config({
  path: "config/config.env"
});
//DB
require("./db/db")();
//Body-Parser Middleware
app.use(express.json());
//Routes
app.use("/signup", require("./routes/signup"));
app.use("/login", require("./routes/login"));
app.use("/report", require("./routes/report"));
app.use("/problem", require("./routes/problem"));
app.use((req, res, next) => {
  console.log(req.headers);
  next();
})
app.get("/", (req, res, next) => {
  if (req.user) {
    res.send(req.user)
  } else {
    res.send("No user found")
  }
})
app.get("/test/:id", (req, res) => {
  const id = req.params.id;
  rep.findOne({
    uid: id
  }).populate("person").then(item => {
    res.send(item)
  }).catch(err => {
    res.send(err);
  })
})
// app.get("/", (req, res) => {
//   res.send(JSON.stringify(req.headers, null, 2) + "API IS UNDER CONSTRUCTION");
// });
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log("APP IS  RUUNING ON PORT" + PORT);
});
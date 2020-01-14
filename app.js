const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const app = express();
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
app.get("/", (req, res, next) => {
  if (req.user) {
    res.send(req.user)
  } else {
    res.send("No user found")
  }
})
// app.get("/", (req, res) => {
//   res.send(JSON.stringify(req.headers, null, 2) + "API IS UNDER CONSTRUCTION");
// });
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log("APP IS  RUUNING ON PORT" + PORT);
});
const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config({
  path: "config/config.env"
});
app.use(express.json());
app.get("/", (req, res) => {
  res.send(JSON.stringify(req.headers, null, 2) + "API IS UNDER CONSTRUCTION");
});
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log("APP IS  RUUNING ON PORT" + PORT);
});

const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send(JSON.stringify(req.headers, null, 2) + "API IS UNDER CONSTRUCTION");
});
app.listen(5500, () => {
  console.log("APP IS  RUUNING");
});

const router = require("express").Router();
const mongooose = require("mongoose");
const user = require("../model/user");
const jwt = require("jsonwebtoken");
const problem = require("../model/random");
router.post("/", (req, res) => {
  const {
    uid,
    pass
  } = req.body;
  user
    .findOne({
      uid
    })
    .then(item => {
      console.log(req.headers);
      const token = jwt.sign({
          item
        },
        process.env.SECRET
      );
      res.setHeader("auth", token);
      console.log(item)
      problem.find({
        person: item._id
      }).then(problems => {
        res.send({
          item,
          token,
          problems
        })
      })

    });
});


module.exports = router;
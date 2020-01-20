const router = require("express").Router();
const mongooose = require("mongoose");
const user = require("../model/user");
const jwt = require("jsonwebtoken");
const problem = require("../model/random");
const auth = require("../config/auth");
router.post("/", (req, res) => {
  if (!req.body.password)
    return res.status(401).send({
      message: "Please Enter The Password"
    });
  const { uid, pass } = req.body;
  user
    .findOne({
      uid
    })
    .then(item => {
      if (item.password == req.body.password) {
        const token = jwt.sign(
          {
            item
          },
          process.env.SECRET
        );
        res.setHeader("auth", token);

        problem.find({}).then(problems => {
          let output1 = [];

          // problems.forEach(value => {
          //   console.log(value);
          // })
          problems.forEach(problems2 => {
            let a = [];

            // let id = problems2.uid;
            // let ui = problems2.uid;
            problems2.problems.forEach(value => {
              let tym = value;

              output1.push(tym);
            });
          });

          let output2 = [];
          output1.forEach(t => {
            // console.log(t);
            if (t.person.toString() == item._id) {
              output2.push(t);
            }
          });

          res.send({
            item,
            token,
            problems: output2
          });
        });
      } else {
        res.send({
          message: "Password Incorrect"
        });
      }
    });
});

module.exports = router;

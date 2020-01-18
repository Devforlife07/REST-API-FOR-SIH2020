const router = require("express").Router();
const mongooose = require("mongoose");
const user = require("../model/user");
const jwt = require("jsonwebtoken");
const problem = require("../model/random");
const auth = require("../config/auth")
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

      problem.find({}).then(problems => {
        let output1 = [];



        // problems.forEach(value => {
        //   console.log(value);
        // })
        problems.forEach(problems2 => {
          let a = [];
          // let id = problems2.uid;

          problems2.problems.forEach(value => {
            // value.uid = id
            console.log(value)
            output1.push(value)
          })
        })
        console.log(output1);
        // let output2 = [];
        // output1.forEach(value => {
        //   console.log(item)
        //   console.log(value.person)
        //   if (value.person == item._id) {
        //     console.log(value);
        //     output2.push(value);
        //   }
        // })
        console.log("hi" + item._id);
        let output2 = [];
        output1.forEach(t => {
          console.log(t);
          if (t.person.toString() == item._id) {
            output2.push(t);
          }
        })


        res.send({
          item,
          token,
          problems: output2
        })
      })

    });
});


module.exports = router;
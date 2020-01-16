const router = require("express").Router();
const mongooose = require("mongoose");
const user = require("../model/user");
const jwt = require("jsonwebtoken");
router.post("/", (req, res) => {
  const { uid, pass } = req.body;
  user
    .findOne({
      uid
    })
    .then(item => {
      console.log(req.headers);
      const token = jwt.sign(
        {
          name: item.name,
          uid: item.uid
        },
        process.env.SECRET
      );
      res.setHeader("auth", token);
      res.send({ item, token });
    });
});
// router.post("/test", (req, res) => {
//     const {
//         uid,
//         pass
//     } = req.body;
//     user.findOne({
//         uid
//     }).then(item => {
//         console.log(req.headers);
//         const token = jwt.sign({
//             name: item.name,
//             uid: item.uid
//         }, process.env.SECRET)
//         res.setHeader("auth", token);
//         res.send({
//             message: "Success",
//             token: token
//         });
//     })
// })

module.exports = router;

const router = require("express").Router();
const mongooose = require("mongoose");
const user = require("../model/user");
const jwt = require("jsonwebtoken");
router.post("/", (req, res) => {
    let {
        uid,
        password
    } = req.body;
    user.findOne({
        uid
    }).then(item => {
        res.send(
            item
        );
    }).catch(err => res.send(err));

})
router.post("/test", (req, res) => {
    const {
        uid,
        pass
    } = req.body;
    user.findOne({
        uid
    }).then(item => {

        const token = jwt.sign({
            name: item.name,
            uid: item.uid
        }, process.env.SECRET)
        res.setHeader("authorization", token);
        res.send({
            message: "Success",
            token: token
        });
    })
})



module.exports = router;
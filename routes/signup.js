const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../model/user");
//Signup Routes
router.post("/", (req, res) => {

    const {
        name,
        email,
        uid,
        password
    } = req.body;
    const user = new User({
        name,
        email,
        uid,
        password
    });
    user.save().then((item) => {
        res.send({
            item: item,
            message: "Your Item Has Been Saved"
        })
    }).catch(err => {
        res.send(err);
    })
})
module.exports = router
const router = require("express").Router();
const mongoose = require("mongoose");
const problem = require("../model/random");
const auth = require("../config/auth");

router.put("/", auth, (req, res) => {
    problem.findOne({
        uid: req.body.uid
    }).then(item => {
        item.problems.forEach(value => {
            if (value._id == req.body.id) {
                if (value.resolve == true) {
                    return res.send({
                        message: "Already Resolved"
                    })
                }
                value.resolve = true
                item.save().then(val => {
                    res.send({
                        message: "Success"
                    });
                }).catch(err => res.send(err));
            } else
                res.send({
                    message: "Incorrect Credentials"
                })

        })

    })
})
module.exports = router
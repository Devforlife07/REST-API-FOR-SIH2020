const router = require("express").Router();
const mongoose = require("mongoose");
const report = require("../model/random");
const auth = require("../config/auth");

router.get("/:id", auth, (req, res) => {
    let id = req.params.id;
    console.log(req.user._id);
    report.findOne({
        uid: id
    }).then(item => {
        if (!item)
            res.send({
                message: "failure"
            })
        else
            res.send({
                message: "success"
            })
    }).catch(err => res.send(err));
});
router.post("/", auth, (req, res) => {
    const {
        uid,
        name,
        address,
        problem,
    } = req.body;
    let user = req.user;
    // console.log(user);
    let prob = {
        problem: problem,
        person: user.item._id
    }
    console.log(prob)
    let newrep = new report({
        uid,
        name,
        address,
        problems: prob
    });
    // newrep.problems.push(prob);
    newrep.save().then(item => res.send(item)).catch(err => res.send(err));
})

module.exports = router;
const router = require("express").Router();
const mongoose = require("mongoose");
const problem = require("../model/problem");
const report = require("../model/random");
const auth = require("../config/auth");

router.get("/", auth, (req, res) => {
    report.find({}).then(item => {
        let problem = [];
        item.forEach(values => {
            problem.push(values.problem);
        })
        res.send({
            problem: problem
        })
    }).catch(err => res.send(err))
});
module.exports = router;
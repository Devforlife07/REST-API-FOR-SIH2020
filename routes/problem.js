const router = require("express").Router();
const mongoose = require("mongoose");
const problem = require("../model/problem");
const report = require("../model/random");
const auth = require("../config/auth");
router.get("/test", auth, (req, res) => {
    report.find({}).then(item => {
        let problem = [];
        item.forEach(values => {
            problem.push({
                problem: values.problem
            });
        })
        res.send(
            problem
        )
    }).catch(err => res.send(err))
});
router.get("/", (req, res) => {
    report.find({}).then(item => {

        res.send(
            item
        )
    }).catch(err => res.send(err))
});
module.exports = router;
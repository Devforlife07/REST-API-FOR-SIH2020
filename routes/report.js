const router = require("express").Router();
const mongoose = require("mongoose");
const report = require("../model/random");

router.get("/:id", (req, res) => {
    let id = req.params.id;
    report.findOne({
        uid: id
    }).then(item => {
        if (!item[item])
            res.send({
                message: "failure"
            })
        else
            res.send({
                message: "success"
            })
    }).catch(err => res.send(err));
});
router.post("/", (req, res) => {
    const {
        uid,
        name,
        address,
        problem,
        person
    } = req.body;
    const newrep = new report({
        uid,
        name,
        address,
        problem,
        person
    });
    newrep.save().then(item => res.send(item)).catch(err => res.send(err));
})

module.exports = router;
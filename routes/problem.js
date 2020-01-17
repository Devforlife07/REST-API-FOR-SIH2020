const router = require("express").Router();
const mongoose = require("mongoose");
const problem = require("../model/problem");
const report = require("../model/random");
const auth = require("../config/auth");
// router.get("/test", auth, (req, res) => {
//     report.find({}).then(item => {
//         console.log(req.user)
//         let problem = [];
//         item.forEach(values => {
//             problem.push({
//                 problem: values.problem
//             });
//         })
//         res.send(
//             problem
//         )
//     }).catch(err => res.send(err))
// });
router.get("/", auth, (req, res) => {
    report
        .find({})
        .then(item => {
            console.log(req.user);
            let problem = [];
            item.forEach(values => {
                problem.push(values);
            });
            res.send(problem);
        })
        .catch(err => res.send(err));
});
router.put("/", auth, (req, res) => {
    report.findOne({
        person: req.user.item._id
    }).then(item => {
        res.send("Sab Changasi");
    });
});

module.exports = router;
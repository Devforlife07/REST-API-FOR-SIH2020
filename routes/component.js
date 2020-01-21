const router = require("express").Router();
const mongoose = require("mongoose");
const comp = require("../model/random");
const auth = require("../config/auth")
router.get("/:id", auth, (req, res) => {
    // console.log(req.params.id)
    comp.findOne({
        uid: (req.params.id)
    }).then(item => {
        if (!item)
            return res.send({
                message: "No Item Exists"
            });

        res.send(item);
    }).catch(err => {
        res.send(err);
    })
})

module.exports = router;
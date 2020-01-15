const router = require("express").Router();
const mongooose = require("mongoose");
const user = require("../model/user");
router.post("/", (req, res) => {
    let {
        uid,
        password
    } = req.body;
    user.findOne({
        uid
    }).then(item => {
        res.send({
            uid: item.uid
        });
    }).catch(err => res.send(err));

})




module.exports = router;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const random = new Schema({
    uid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    problem: {
        type: String,
    },
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sihuser"

    }
})
module.exports = mongoose.model("report", random);
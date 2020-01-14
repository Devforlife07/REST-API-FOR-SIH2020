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
        type: String

    }
})
module.exports = mongoose.model("report", random);
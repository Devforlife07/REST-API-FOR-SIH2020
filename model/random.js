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
    problems: [{
        problem: {
            type: String
        },
        person: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "sihuser"
        },
        uid: {
            type: String
        },
        resolve: {
            type: Boolean,
            default: false
        },

    }]
    // person: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "sihuser"
    // }
})
module.exports = mongoose.model("report", random);
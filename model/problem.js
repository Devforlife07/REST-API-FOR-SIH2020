const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const prob = new Schema({
    problem: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "unsolved"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "sihuser"
    }
});
module.exports = mongoose.model("problems", prob);
const mongoose = require("mongoose");

const taskScheme = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Missing title key"],
    },
    id: {
        type: String,
        required: [true, "Missing id"]
    }
});

module.exports = taskScheme;
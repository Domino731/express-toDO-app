const mongoose = require("mongoose");

const taskScheme = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Missing title key"],
    },
    createdAt: {
        type: Date,
        required: [true, "Missing createdAt key"],
    },
    status: {
        type: String,
        required: [true, "Missing title key"],
    },
});

module.exports = taskScheme;
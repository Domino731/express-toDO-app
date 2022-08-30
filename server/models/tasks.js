const mongoose = require("mongoose");

const taskScheme = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Missing title key"],
    }
});

module.exports = taskScheme;
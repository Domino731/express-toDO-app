const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unicode: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    }
});

const User = mongoose.model("user", userSchema);
module.exports = User;
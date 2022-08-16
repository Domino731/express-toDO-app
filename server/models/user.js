const mongoose = require("mongoose");
const {isEmail} = require("validator");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Missing email"],
        unique: true,
        validate: [isEmail, "Please, enter an valid e-mail"]
    },
    password: {
        type: String,
        required: [true, "Missing password"],
        minLength: 6,
    }
});

const User = mongoose.model("user", userSchema);
module.exports = User;
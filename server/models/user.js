const mongoose = require("mongoose");
const {isEmail} = require("validator");
const bcrypt = require("bcrypt");

// mongo schema for user
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

// fire a function after doc saved to mongoDB
userSchema.post("save", function (doc, next) {
    console.log("MONGO: New user was created")
    next();
});

// fire a function before doc save
userSchema.pre("save", async function (next) {
    // hash the password
    const salt = await bcrypt.genSalt();

    // "this" refers to user data - password & email
    this.passwod = await bcrypt.hash(this.password, salt);
    next();
})


const User = mongoose.model("user", userSchema);
module.exports = User;
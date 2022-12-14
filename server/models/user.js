const mongoose = require("mongoose");
const {isEmail} = require("validator");
const bcrypt = require("bcrypt");
const taskScheme = require("./tasks");

// mongo schema for user
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Missing email"],
        unique: [true, "E-mail must be unique"],
        validate: [isEmail, "Please, enter an valid e-mail"]
    },
    password: {
        type: String,
        required: [true, "Missing password"],
        minLength: [6, "Password is too short"],
    },
    tasks: [taskScheme]
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
    this.password = await bcrypt.hash(this.password, salt);

    // add tasks array
    this.tasks = [];

    next();
})

// STATIC METHODS for user
// log the user
userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({email});
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        } else {
            throw Error("Incorrect password");
        }
    } else {
        throw Error("Incorrect email");
    }
}

// userSchema.statics.addTask = async function () {
//     // const user = await this.findOne({email});
//     if (user) {
//         // const auth = await bcrypt.compare(password, user.password);
//         if (auth) {
//             return {Message: "SUCCESS"};
//         } else {
//             throw Error("Incorrect password");
//         }
//     } else {
//         throw Error("Incorrect email");
//     }
// }

const User = mongoose.model("user", userSchema);
module.exports = User;
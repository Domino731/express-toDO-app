const User = require('../models/user');

const handleError = (error) => {
    console.log(error);
}

module.exports.signup_get = (req, res) => {
    console.log("REQUEST: /signup_get success");
    res.send("success");
    res.json({message: "success"});
}
module.exports.signup_post = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.create({email, password});
        res.status(201).json(user);
    } catch (err) {
        handleError(err);
        res.status(400).json();
    }
}
module.exports.login_get = (req, res) => {
    res.send("success");
    res.json({message: "success"});
}
module.exports.login_post = async (req, res) => {
    res.send("success");
    res.json({message: "success"});
}
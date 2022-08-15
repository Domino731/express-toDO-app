const User = require('../models/user');

module.exports.signup_get = (req, res) => {
    console.log("REQUEST: /signup_get success");
    res.send("success");
    res.json({message: "success"});
}
module.exports.signup_post = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.create({email, password});
        console.log(user);
        res.status(201).json(user);
    } catch (err) {
        res.status(404).json();
    }
}
module.exports.login_get = (req, res) => {
    console.log("REQUEST: /login_get success");
    res.send("success");
    res.json({message: "success"});
}
module.exports.login_post = async (req, res) => {
    console.log("REQUEST: /login_post Success");
    res.send("success");
    res.json({message: "success"});
}
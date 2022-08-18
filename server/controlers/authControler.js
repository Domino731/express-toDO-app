const User = require('../models/user');
const jwt = require('jsonwebtoken');

const handleError = (error) => {
    console.log(error);
}

const createToken = (id) => {
    return jwt.sign({id}, 'User key', {
        // 3 days in milliseconds
        expiresIn: 3 * 60 * 60 * 24
    });
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
        // set jwt token to cookie
        const token = createToken(user._id);
        res.cookie('jwt', token, {
            httpOnly: true,      // 3 days in milliseconds
            expiresIn: 3 * 60 * 60 * 24 * 1000
        })
        res.status(201).json(user);
    } catch (err) {
        handleError(err);
        res.status(400).json();
    }
}
module.exports.login_get = (req, res) => {
    const {email, password} = req.body;
}
module.exports.login_post = async (req, res) => {
    res.send("success");
    res.json({message: "success"});
}
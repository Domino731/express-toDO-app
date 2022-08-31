const User = require('../models/user');
const jwt = require('jsonwebtoken');
const userModel = require("../models/user");

const handleError = (error) => {
    let message = {text: '', code: 0}
    console.log(error);
    if (error.message === 'Incorrect email') {
        message.text = 'Pass valid e-mail';
        message.code = 'AL1'
    }
    if (error.message == 'Incorrect password') {

        message.text = 'Pass correct password';
        message.code = 'AL2'
    }

    return message;
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
        const user = await User.create({email, password, tasks: []});
        // set jwt token to cookie
        const token = createToken(user._id);
        res.cookie('jwt', token, {
            httpOnly: true,      // 3 days in milliseconds
            expiresIn: 3 * 60 * 60 * 24 * 1000
        });
        res.status(201).json({data: user, status: 201});
    } catch (err) {
        // console.log(err);
        handleError(err);
        res.status(400).json();
    }
}
module.exports.login_get = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);
        res.status(200).json({id: user._id})
    } catch (err) {
        res.status(400).json({});
    }
}
module.exports.login_post = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);
        // set jwt token to cookie
        const token = createToken(user._id);
        res.cookie('jwt', token, {
            httpOnly: true,      // 3 days in milliseconds
            expiresIn: 3 * 60 * 60 * 24 * 1000
        });
        res.status(200).json({data: {id: user._id}, status: 200});
    } catch (err) {
        const error = handleError(err);
        res.status(400).json(error);
    }
}


module.exports.checkCurrentUser = (req, res) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, 'jwt', async (err, decodedToken) => {
            if (err) {
                console.log(err);
                res.status(400).json({message: ""})
            } else {
                let user = await userModel.findById(decodedToken.id);
                res.status(200).json({user});
            }
        })
    } else {
        res.status(400).json({message: "No user found"});
    }
}

module.exports.addTask = async (req, res) => {
    const {title, userId} = req.body;
    try {
        const user = await userModel.findByIdAndUpdate(userId, {
            $push: {
                'tasks': {
                    title,
                }
            }
        });
        const userTasks = await userModel.findById(userId);
        res.status(200).json({message: "SUCCESS", data: userTasks.tasks});
    } catch (e) {
        res.status(400).json({message: "FAILED"});
    }
}

module.exports.getTasks = async (req, res) => {
    const {userId} = req.query;
  
    if (userId) {
        const userTasks = await userModel.findById(userId);
        res.status(200).json({message: "SUCCESS", data: userTasks.tasks});
    } else {
        res.status(404).json({message: "FAILED", status: 404});
    }
}
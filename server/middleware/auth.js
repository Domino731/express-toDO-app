const jwt = require('jsonwebtoken');
const userModel = require('../models/user');

/** check the current user */
const checkCurrentUser = (req, res) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'jwt', async (err, decodedToken) => {
            if (err) {
                res.status(400);
            } else {
                let user = await userModel.findById(decodedToken.id);
                res.status(200);
                res.send("Success").json({user});
            }
        })
    } else {
        res.status(400);
    }
}
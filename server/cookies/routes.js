const {Router} = require("express");
// const authController = require("../../controlers/authControler");

// server router
const router = Router();

router.get("/set-cookies", (req, res) => {
    res.setHeader('Set-Cookie', 'newUser: true');
    res.send("You got the cookies :)")
});

module.exports = router;
const {Router} = require("express");
const authController = require("../../controlers/authControler");

// server router
const router = Router();

// auth
router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.post('/checkCurrentUser', authController.checkCurrentUser);

module.exports = router;
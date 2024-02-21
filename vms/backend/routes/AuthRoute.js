
const { Signup,Login } = require ("../controllers/AuthController");
const { userVerification } = require("../middleware/AuthMiddleware")
const express = require('express')
const router = express.Router()


router.post('/signup', Signup);
router.post('/login', Login);
router.post('/', userVerification);

module.exports = router

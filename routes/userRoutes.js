const express = require("express");
const { registerUser, loginUser, currentUser } = require("../controller/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();


router.post('/register', registerUser)

router.post('/login', loginUser)

router.post('/current', validateToken, currentUser)

module.exports = router;
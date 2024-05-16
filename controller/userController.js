const asyncHandler = require("express-async-handler")

// @desc Register user
// route POS /api/user
// @access Public

const registerUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register the user" })
});


// @desc Register user
// route POS /api/user/register
// @access Public

const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: "Register the user" })
});

// @desc Register user
// route POS /api/user/currentuser
// @access Public

const currentUser = asyncHandler(async  (req, res) => {
    res.json({ message: "login the user" })
})

module.exports = { registerUser,loginUser,currentUser }
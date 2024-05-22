const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
// @desc Register user
// route POS /api/user
// @access Public

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("all fields are mandatory")
    }

    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("user already registered")
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //  new user
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    });


    if (user) {
        res.status(201).json({ _id: user.id, email: user.email })
    } else {
        res.status(400);
        throw new Error(" user data us not valid")

    }

});


// @desc Register user
// route POS /api/user/register
// @access Public

const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id
                },
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1m' }
        )
        res.status(201).json({ token: accessToken,userId:user.id,email:user.email });
    } else {
        res.status(401)
        throw new Error("email or password not valid")
    }
})

// @desc Register user
// route POS /api/user/currentuser
// @access Public

const currentUser = asyncHandler(async (req, res) => {
    res.json({ message: "login the user" })
})

module.exports = { registerUser, loginUser, currentUser }
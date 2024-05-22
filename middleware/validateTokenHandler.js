const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken")

const validateToken = asyncHandler(async (req, res) => {
    let token;
    let authHeder = req.headers.Authorization || req.headers.authorization;

    if (authHeder && authHeder.startsWith('Bearer')) {
        token = authHeder.split(" ")[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401)
                throw new Error("user is not authorized")
            }
        })



    }
})

module.exports = validateToken;
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the user name"]
    },
    email: {
        type: String,
        required: [true, "Please add the user email address"],
        unique: [true, "Email  address already taken"]
    },
    password: {
        type: String,
        required: [true, "please add the user password"]
    },
}
    , {
        timeStamps: true
    });


module.export= mongoose.model("User",userSchema);const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the user name"]
    },
    email: {
        type: String,
        required: [true, "Please add the user email address"],
        unique: [true, "Email  address already taken"]
    },
    password: {
        type: String,
        required: [true, "please add the user password"]
    },
}
    , {
        timeStamps: true
    });


module.export= mongoose.model("User",userSchema);
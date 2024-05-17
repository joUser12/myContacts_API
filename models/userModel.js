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


<<<<<<< HEAD

module.exports = mongoose.model("User", userSchema);


=======
module.exports = mongoose.model("User",userSchema);
module.exports= mongoose.model("User",userSchema);
>>>>>>> 746e91e (fix)

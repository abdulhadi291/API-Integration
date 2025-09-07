const mongoose = require("mongoose");

const userSchema = new mongoose.userSchema({
    name : String,
    email : String,  
    password : String,
    createdAt : {
        type : Data,
        default: new Date(),
    },
});

const User = mongoose.model("User" , userSchema);

module.exports = Users;
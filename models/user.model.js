const mongoose = require("mongoose");
// mongoose.set('strictQuery', true);
let userSchema = new mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    password:String
});

const User = mongoose.model("user",userSchema);
module.exports = User;



const mongoose = require("mongoose")
const users = mongoose.model("users", new mongoose.Schema({
    nickName:{
        type:String,
        require:true
    },
    email: {
        type: String,
        require: true

    },
    password: {
        type: String,
        require: true
    }

}))
module.exports = { users }

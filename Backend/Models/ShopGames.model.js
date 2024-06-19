const mongoose = require("mongoose")
const Games = mongoose.model("Games", new mongoose.Schema({
    image:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:false
    },
    category:{
        type:String,
        require:false,
    }

}))
module.exports = { Games }
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
    price:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:false,
    },
    bigImg:{
        type:String,
        require:false
    },
    nameImg:{
        type:String,
        require:false
    },
    description:{
        type:String,
        require:false
    },
    keyFImg1:String,
    keyFTit1:String,
    keyFDes1:String,
    keyFImg2:String,
    keyFTit2:String,
    keyFDes2:String,

}))
module.exports = { Games }
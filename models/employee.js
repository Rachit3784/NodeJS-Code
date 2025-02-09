const mongoose = require("mongoose");

const data = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type : String,
        unique : true
    }
})


const model = new mongoose.model("Mymodel",data);

module.exports = model;
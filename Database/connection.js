const mongoose = require("mongoose");




const dburl = "mongodb://127.0.0.1:27017/MyGitDataBase"

mongoose.connect(dburl);


const db = mongoose.connection;
db.on("connected",()=>{
    console.log("Database connected")
});

db.on("disconnected",()=>{
    console.log("Database disconnected")
});

db.on("error",(err)=>{
    console.log("Error",err);
});

module.exports = db;
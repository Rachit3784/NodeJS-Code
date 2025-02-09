const mongoose = require("mongoose");
require("dotenv").config();



// const ldburl = process.env.LDBurl;
const dburl = process.env.DBurl;
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
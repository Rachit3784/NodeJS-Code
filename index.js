const express = require("express");
const db = require("./Database/connection.js")
const Routee = require("./routes/employee.js")
const bodyParser = require("body-parser");

server = express();

server.use(bodyParser.json());

server.listen("8080",()=>{
    console.log("Server Started!!!");
});

server.use("/employee",Routee);

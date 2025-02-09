const express = require("express");
const {getAll,postemp,getspecific} = require("../controller/empMethod.js")
const route = express.Router();

route.get("/",getAll).get("/:name",getspecific).post("/post/",postemp);

module.exports = route;
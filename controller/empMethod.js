const Employee = require("../models/employee.js")



const  getAll = async (req,res)=>{
try{
    res.status(200).json(await Employee.find());
}
catch(err){
    console.log("Error",err);
    res.status(500).json(err);
}
}

const postemp = async (req,res)=>{
    try{
     const data = new Employee(req.body);
     console.log(typeof data,"-----------------")
     const mydata = await data.save()
     console.log("Data saved");
        res.status(200).json(mydata);
      
    }catch(err){
        console.log("Error--------",err);
        res.json({Error:err});
    }
}

const  getspecific = async (req,res)=>{
    try{
        Naam = req.params.name
        console.log(Naam);
        const data = await Employee.find({name:Naam})
        res.status(200).json(data);
        console.log(data)
    }
    catch(err){
        console.log("Error",err);
        res.status(500).json(err);
    }
    }
    


module.exports  = {getAll,postemp,getspecific};
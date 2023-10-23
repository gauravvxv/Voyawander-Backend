
const {TravellerModel} = require("../model/traveller.model");
const {Router} = require("express");
const travellerController = Router();

travellerController.post("/travellerdetails",async(req,res)=>{
    const {title,first_N,last_N,email,phone,day,month,year,gender,nationality,c_holder,exp_day,c_number,cvv} = req.body;
await TravellerModel.create(  {title,first_N,last_N,email,phone,day,month,year,gender,nationality,c_holder,exp_day,c_number,cvv});

res.send("Thankyou for details")
})

module.exports={
    travellerController
}

const {TravellerModel} = require("../model/traveller.model");
const {Router} = require("express");
const travellerController = Router();

travellerController.post("/travellerdetails",async(req,res)=>{
    const {firstName,lastName,email,phoneNumber,dateOfBirth,gender,nationality} = req.body;
await TravellerModel.create( {firstName,lastName,email,phoneNumber,dateOfBirth,gender,nationality});

res.send("Thankyou for details")
})

module.exports={
    travellerController
}
const {ContactModel} = require("../model/contact.model");
const {Router} = require("express");
const contactController = Router();

contactController.post("/contactus",async (req,res)=>{
    const {email,mobile,message} = req.body;
    await ContactModel.create({email,mobile,message});

    res.send("Thankyou for contact us")

})

contactController.get("/show",async(req,res)=>{
  const data = await ContactModel.find();
  res.send(data)
})

module.exports={
    contactController
}
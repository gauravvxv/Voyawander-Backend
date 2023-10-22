const bcrypt = require("bcrypt");
const {UserModel} = require("../model/auth.model")
const {Router} = require("express");
const userController = Router();
const jwt = require("jsonwebtoken");

userController.post("/signup",(req,res)=>{
    const {name,email,password} = req.body;
    bcrypt.hash(password, 10, async function(err, hash) {
       if(err){
        res.send(err)
       }

       const user = new UserModel({
        name,
        email,
        password: hash
       })

       try {
        await user.save();
        res.send("Signup Successfull")
       } catch (error) {
        console.log(error)
        res.send("errors")
       }

    });
})

userController.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email})
    const hash = user.password;

    bcrypt.compare(password,hash,function(err,result){
        if(err){
            res.send(err)
        }

        if(result) {
            const token  = jwt.sign({userID: user._id }, process.env.JWT_SECRET);
            res.send({message: "Login Successful",token: token})
        }
        else{
            res.send("invalid critials")
        }
    })

})

module.exports={
    userController
}
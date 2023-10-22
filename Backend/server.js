const express = require("express");
const {userController} = require("./Routes/user.route")
const {contactController} = require("./Routes/contact.route")
const {travellerController} = require("./Routes/traveller.route")
const connection = require("./config/db")
const app = express();
const PORT = 8000;

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Based API endPoint")
})

app.use("/",userController)
app.use("/",contactController)
app.use("/",travellerController)

app.listen(PORT,async()=>{
    try {
        await connection
        console.log("Connected to db")
    } catch (error) {
console.log(error)        
    }
    console.log("Listening")
})
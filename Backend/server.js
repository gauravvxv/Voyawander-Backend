const express = require("express");
const {userController} = require("./Routes/user.route")
const {contactController} = require("./Routes/contact.route")
const {travellerController} = require("./Routes/traveller.route")
const connection = require("./config/db")
const cors = require("cors")


const app = express();
const PORT = process.env.PORT;
require("dotenv").config();

app.use(express.json())

app.use(cors())

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
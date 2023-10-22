const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    email: {type: String, required:true },
    mobile: {type: Number, required:true },
    message: {type: String, required:true },
})

const ContactModel = mongoose.model("contactus",contactSchema)

module.exports={
    ContactModel
}
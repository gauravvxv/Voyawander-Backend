const mongoose = require("mongoose");

const travellerSchema = mongoose.Schema({
    firstName: {type: String,required: true},
    lastName: {type: String,required: true},
    email: {type: String,required: true},
    phoneNumber: {type: Number,required: true},
    dateOfBirth: {type: String,required: true},
    gender: {type: String,required: true},
    nationality: {type: String,required: true},
})

const TravellerModel = mongoose.model("traveller detail", travellerSchema);


module.exports={
    TravellerModel
}
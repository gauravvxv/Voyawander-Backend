const mongoose = require("mongoose");

const travellerSchema = mongoose.Schema({
    title: {type: String,required: true},
    first_N: {type: String,required: true},
    last_N: {type: String,required: true},
    email: {type: String,required: true},
    phone: {type: Number,required: true},
    day: {type: String,required: true},
    month: {type: String,required: true},
    year: {type: String,required: true},
    gender: {type: String,required: true},
    nationality: {type: String,required: true},
    c_holder: {type: String,required: true},
    exp_day: {type: String,required: true},
    c_number: {type: String,required: true},
    cvv: {type: String,required: true},
})

const TravellerModel = mongoose.model("traveller detail", travellerSchema);


module.exports={
    TravellerModel
}
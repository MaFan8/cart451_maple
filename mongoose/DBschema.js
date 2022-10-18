const mongoose = require("mongoose");
const AirBNBSchema = new mongoose.Schema({

    _id:Number,
    listing_id:Number,
    date:Number,
    reviewer_id:Number,
    reviewer_name:String,
    comments:String,

})

const AirBnb = mongoose.model("AIRBNB", AirBNBSchema, "airbnb reviews");
module.exports = AirBnb;


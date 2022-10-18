const mongoose = require("mongoose");
const RamenSchema = new mongoose.Schema({

    _id:Number,
    // Review #:Number,
    Brand:String,
    Variety:String,
    Style:String,
    Country:String,
    Stars:Array,

})

const RamenRatings = mongoose.model("ramen", RamenSchema, "ramenRatings");
module.exports = RamenRatings;


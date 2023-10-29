const mongoose = require("mongoose");

const sliderSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    detail: { type: String },
    image: { type: String, required: true }
})

const SliderModel = mongoose.model("sliderData", sliderSchema);
module.exports = SliderModel;
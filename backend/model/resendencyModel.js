const mongoose = require("mongoose");

const residencySchema = mongoose.Schema({
    title: { type: String, required: true },
    discription: { type: String },
    price: { type: Number },
    address: { type: String, unique: true },
    city: { type: String },
    country: { type: String },
    image: { type: String, required: true },
    facilities: { type: Object },
    userEmail: { type: String },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
}, { timestamps: true })

const ResidencyModel = mongoose.model("residency", residencySchema);
module.exports = ResidencyModel;
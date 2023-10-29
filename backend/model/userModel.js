const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    bookedVisted: {
        type: Array,
        default: []
    },
    favRsidenciesID: {
        type: Array,
        default: []
    },
    image: { type: String },
    OwnedResidency: { type: [mongoose.Schema.Types.ObjectId], ref: "residency" },
}, { timestamps: true })

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
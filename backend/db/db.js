const mongoose = require("mongoose");

exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODBURL)
        console.log(`DB is Connected with Host ${mongoose.connection.host}`)
    } catch (error) {
        console.log("Database failed to connect")
    }
}
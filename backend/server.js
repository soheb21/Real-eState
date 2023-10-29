const express = require("express");
const app = express();
const { connectDB } = require("./db/db");
const cors = require("cors");
require("dotenv").config();


app.use(express.json());
app.use(cors())

//DB
connectDB();

app.use("/api/v1/user", require("./routes/userRoute"))
app.use("/api/v1/residency", require("./routes/residencyRoute"))
app.use("/api/v1/slider", require("./routes/sliderRoute"))

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Your server is running at this ${PORT}`))
const express = require("express");
const { fetchSliderData, addSliderData } = require("../controller/slider.Ctrl");
const router = express.Router();

router.get("/", fetchSliderData)
    .post("/", addSliderData)

module.exports = router;
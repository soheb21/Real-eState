const SliderModel = require("../model/sliderModel")

exports.addSliderData = async (req, res) => {
    try {
        const data = new SliderModel(req.body);
        const response = await data.save();
        res.status(201).json({
            success: true,
            message: "Data is added is slider Successfully",
            data: response
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to add Slider Data",
            error
        })
    }
}
exports.fetchSliderData = async (req, res) => {
    try {
        const data = await SliderModel.find({})
        res.status(201).json({
            success: true,
            message: "Slider Data is fetch Successfully",
            data: data
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to fetch Slider Data",
            error:error.mesaage
        })
    }
}
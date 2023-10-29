const ResidencyModel = require("../model/resendencyModel");

exports.addResidency = async (req, res) => {
    try {
        const isResidencyExist = await ResidencyModel.findOne({ address: req.body.address });
        if (!isResidencyExist) {
            const newResidency = new ResidencyModel(req.body);
            await newResidency.save();
            res.status(201).json({
                success: true,
                message: "Residency Created Successfully",
            })
        }
        res.status(201).json({
            success: false,
            message: "Residency Already Exist"
        })

    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to add Residency",
            error
        })
    }
}
exports.fetchAllResidency = async (req, res) => {
    try {
        const Residency = await ResidencyModel.find({});
        res.status(201).json({
            success: true,
            message: "All Residencys fetched Successfully",
            data: Residency
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to fetch All Residencys",
            error
        })
    }
}
exports.fetchOneResidency = async (req, res) => {
    try {
        const { id } = req.params;
        const Residency = await ResidencyModel.findById({ _id: id });
        Residency.OwnedResidency.push(...req.body);
        res.status(201).json({
            success: true,
            message: "Residency fetched Successfully",
            data: Residency
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to fetch Residency",
            error
        })
    }
}
exports.updateResidency = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedResidency = await ResidencyModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.status(201).json({
            success: true,
            message: "Residency updated Successfully",
            data: updatedResidency
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to update Residency",
            error
        })
    }
}
exports.deleteResidency = async (req, res) => {
    try {
        const { id } = req.params;
        await ResidencyModel.findByIdAndDelete({ _id: id });
        res.status(201).json({
            success: true,
            message: "Residency deleted Successfully",
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to delete Residency",
            error
        })
    }
}
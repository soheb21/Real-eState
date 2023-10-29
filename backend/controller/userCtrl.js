const UserModel = require("../model/userModel")


exports.addUser = async (req, res) => {
    try {
        const isUserExist = await UserModel.findOne({ email: req.body.email });
        if (!isUserExist) {
            const newUser = new UserModel(req.body);
            await newUser.save();
            res.status(201).json({
                success: true,
                message: "User Created Successfully",
            })
        }
        res.status(201).json({
            success: false,
            message: "user Already Exist"
        })

    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to add user",
            error: error.message
        })
    }
}
exports.fetchAllUser = async (req, res) => {
    try {
        const user = await UserModel.find({});
        res.status(201).json({
            success: true,
            message: "All Users fetched Successfully",
            data: user
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to fetch All users",
            error: error.message
        })
    }
}
exports.fetchOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById({ _id: id }).populate("favRsidenciesID");
        res.status(201).json({
            success: true,
            message: "User fetched Successfully",
            data: user
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to fetch user",
            error: error.message
        })
    }
}
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await UserModel.findByIdAndUpdate({ _id: id }, { $push: { OwnedResidency: req.body.OwnedResidency } }, { new: true });
        res.status(201).json({
            success: true,
            message: "User updated Successfully",
            data: updatedUser
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to update user",
            error: error.message
        })
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await UserModel.findByIdAndDelete({ _id: id });
        res.status(201).json({
            success: true,
            message: "User deleted Successfully",
        })
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to delete user",
            error: error.message
        })
    }
}
exports.bookedVisit = async (req, res) => {
    try {
        const { email, date } = req.body;
        const { id } = req.params;
        const alredayBooked = await UserModel.findOne({ email: email });
        if (alredayBooked.bookedVisted.some((visit) => visit.id === id)) {
            res.status(400).json({
                success: false,
                message: "This residency is already booked by you",
            })
        }
        else {
            const data = await UserModel.findOneAndUpdate({ email: email }, { $push: { bookedVisted: { id: id, date: date } } }, { new: true })
            res.status(200).json({
                success: true,
                message: "This residency is booked by you",
                data: data
            })
        }

    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to Book Place",
            error: error.message
        })
    }
}
exports.cancelBooking = async (req, res) => {
    try {
        const { email } = req.body
        const { id } = req.params;
        const user = await UserModel.findOne({ email: email });
        const index = user.bookedVisted.findIndex((i) => i.id === id);
        if (index === -1) {
            res.status(401).json({
                sucess: false,
                message: "Booking not found"
            })
        } else {
            user.bookedVisted.splice(index, 1)
            await UserModel.findOneAndUpdate({ email: email }, { bookedVisted: user.bookedVisted });
            res.status(200).json({
                success: true,
                message: "Booking Cancel successfully",
            })
        }

    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to Book cancel",
            error: error.message
        })
    }
}

//add fav or not
exports.favResidency = async (req, res) => {
    try {
        const { email } = req.body;
        const { id } = req.params;
        const user = await UserModel.findOne({ email: email })
        const index = user.favRsidenciesID.findIndex((i) => i.id === id);
        if (user.favRsidenciesID.includes(id)) {
            user.favRsidenciesID.splice(index, 1)
            const data = await UserModel.findOneAndUpdate({ email: email }, { favRsidenciesID: user.favRsidenciesID }, { new: true })
            res.status(200).json({
                success: true,
                message: "This residency is removed from your favorate's",
                data: data
            })
        } else {
            const data = await UserModel.findOneAndUpdate({ email: email }, { $push: { favRsidenciesID: id } }, { new: true });
            res.status(200).json({
                success: true,
                message: "This residency is added in your favorate's",
                data: data
            })
        }
    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to add or remove in Fav",
            error: error.message
        })
    }
}

exports.fetchFavResidency = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await UserModel.findById({ _id: id }).populate("favRsidenciesID")
        res.status(201).json({
            success: true,
            message: "Successfully fetch fev",
            data: response.favRsidenciesID
        })


    } catch (error) {
        res.status(501).json({
            success: false,
            message: "Failed to fetch fav",
            error: error.message
        })
    }

}
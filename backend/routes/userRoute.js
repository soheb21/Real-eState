const express = require("express");
const { fetchAllUser, fetchOneUser, addUser, updateUser, deleteUser, bookedVisit, cancelBooking, favResidency, fetchFavResidency } = require("../controller/userCtrl");
const router = express.Router();

router.get("/", fetchAllUser)
    .get("/:id", fetchOneUser)
    .post("/", addUser)
    .patch("/:id", updateUser)
    .delete("/:id", deleteUser)
    .post("/bookVisted/:id", bookedVisit)
    .post("/canelBooking/:id", cancelBooking)
    .post("/favResidency/:id", favResidency)
    .get("/fav/:id",fetchFavResidency)

module.exports = router;
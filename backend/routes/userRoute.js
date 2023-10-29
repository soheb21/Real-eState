const express = require("express");
const { fetchAllUser, fetchOneUser, addUser, updateUser, deleteUser, bookedVisit, cancelBooking } = require("../controller/userCtrl");
const router = express.Router();

router.get("/", fetchAllUser)
    .get("/:id", fetchOneUser)
    .post("/", addUser)
    .patch("/:id", updateUser)
    .delete("/:id", deleteUser)
    .post("/bookVisted/:id", bookedVisit)
    .post("/canelBooking/:id",cancelBooking)

module.exports = router;
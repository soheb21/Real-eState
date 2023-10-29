const express = require("express");
const { fetchAllResidency, fetchOneResidency, addResidency, updateResidency, deleteResidency } = require("../controller/residencyCtrl");

const router = express.Router();

router.get("/", fetchAllResidency)
    .get("/:id", fetchOneResidency)
    .post("/", addResidency)
    .patch("/:id", updateResidency)
    .delete("/:id", deleteResidency)

module.exports = router;
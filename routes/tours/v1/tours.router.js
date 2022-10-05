const express = require("express");
const { addTour, getTour, updateATour, deleteATour } = require('../../../controllers/tours/tours.controller');
const router = express.Router();


router.route("/")
    .get(getTour)
    .post(addTour)
    .patch(updateATour)
    .delete(deleteATour)

router.route("/:id").get(getTour)

module.exports = router;
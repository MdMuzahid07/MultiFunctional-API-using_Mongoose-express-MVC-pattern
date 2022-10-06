const express = require("express");
const { addTour, updateATour, deleteATour, getTour, getTourById } = require('../../../controllers/tours/tours.controller');
const router = express.Router();

router.route("/:id").get(getTourById)


router.route("/")
    .get(getTour)
    .post(addTour)
    .patch(updateATour)
    .delete(deleteATour)



module.exports = router;
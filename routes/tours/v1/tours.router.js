const express = require("express");
const { addTour, updateATour, deleteATour, getTour, getTourById, getTourByQuery, getCheapestTourBySort } = require('../../../controllers/tours/tours.controller');
const router = express.Router();


router.route("/cheapest").get(getCheapestTourBySort)
router.route("/:id").get(getTourById)
router.route("/").get(getTourByQuery)


router.route("/")
    .get(getTour)
    .post(addTour)
    .patch(updateATour)
    .delete(deleteATour)



module.exports = router;
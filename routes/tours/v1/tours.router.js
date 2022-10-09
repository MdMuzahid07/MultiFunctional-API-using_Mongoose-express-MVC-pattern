const express = require("express");
const { addTour, updateATour, deleteATour, getTour, getTourById, getTourByQuery, getCheapestTourBySort } = require('../../../controllers/tours/tours.controller');
const visitCount = require("../../../middlewares/VisitCounter");
const router = express.Router();


router.route("/cheapest").get(getCheapestTourBySort);


router.route("/")
    .get(getTour)
    .post(addTour)
    .patch(updateATour)
router.route("/").get(getTourByQuery);

router.route("/:id").get(visitCount, getTourById)
router.route("/:id").delete(deleteATour);

module.exports = router;
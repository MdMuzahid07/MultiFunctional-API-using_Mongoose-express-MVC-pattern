const express = require("express");
const { addTour, updateATour, deleteATour, getTour, getTourById, getTourByQuery } = require('../../../controllers/tours/tours.controller');
const router = express.Router();

router.route("/").get(getTourByQuery)
router.route("/:id").get(getTourById)


router.route("/")
    .get(getTour)
    .post(addTour)
    .patch(updateATour)
    .delete(deleteATour)



module.exports = router;
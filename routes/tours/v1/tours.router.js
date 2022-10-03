const express = require('express');
const { addTour, getTour } = require('../../../controllers/tours/tours.controller');
const router = express.Router();


router.route("/")
    .get(getTour)
    .post(addTour)
    .patch()
    .delete()

module.exports = router;
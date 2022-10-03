const express = require('express');
const { getProducts } = require('../../../controllers/tours/tours.controller');
const router = express.Router();


router.route("/")
    .get(getProducts)
    .post()
    .patch()
    .delete()

module.exports = router;
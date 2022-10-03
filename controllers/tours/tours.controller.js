const Tours = require("../../utils/Model");

module.exports.getTour = (req, res, next) => {
    const data = "get route working";

    res.status(200).send({
        success: true,
        message: "success",
        data: data
    })
}

module.exports.addTour = (req, res, next) => {

    // we can use can or create method to add data on database
    const tour = new Tours(req.body);

    tour.save();


    res.status(200).send({
        success: true,
        message: "success",
        data: req.body
    })
}
const Tours = require("../../utils/Model");

module.exports.getTour = (req, res, next) => {
    const data = "get route working";

    res.status(200).send({
        success: true,
        message: "success",
        data: data
    })
}

module.exports.addTour = async (req, res, next) => {

    try {
        // we can use can or create method to add data on database
        const tour = new Tours(req.body);

        const result = await tour.save();


        res.status(200).send({
            success: true,
            message: "success",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "data not inserted",
            error: error.message
        })
    }


}
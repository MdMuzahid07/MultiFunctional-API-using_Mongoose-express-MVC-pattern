module.exports.getTour = (req, res, next) => {
    const data = "get route working";

    res.status(200).send({
        success: true,
        message: "success",
        data: data
    })
}

module.exports.addTour = (req, res, next) => {

    res.status(200).send({
        success: true,
        message: "success",
        data: req.body
    })
}
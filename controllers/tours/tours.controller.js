const Tours = require("../../utils/Model");

module.exports.getTour = async (req, res, next) => {
    try {

        const result = await Tours.find({});


        res.status(200).send({
            success: true,
            message: "success",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "data not found",
            error: error.message
        })
    }
};

module.exports.getTourById = async (req, res, next) => {
    try {

        // const result = await Tours.find({ _id: "633db40d498db811c47a429c" });
        // we can use or operator in mongodb in different syntax
        // const result = await Tours.find({ $or: [{ _id: "633db40d498db811c47a429c" }, { name: "cox's bazar family tour" }] });
        const { id } = req.params;

        // to show specific data given from query
        const result = await Tours.find({ _id: id });

        res.status(200).send({
            success: true,
            message: "success",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "data not found",
            error: error.message
        })
    }
};

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

};

module.exports.updateATour = async (req, res, next) => {
    try {
        const result = await "data found"

        res.status(200).send({
            success: true,
            message: "success",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "data not update",
            error: error.message
        })
    }
}

module.exports.deleteATour = async (req, res, next) => {
    try {
        const result = await "a date deleted";

        res.status(200).send({
            success: true,
            message: "success",
            data: result
        })
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "success",
            error: error.message
        })
    }
}
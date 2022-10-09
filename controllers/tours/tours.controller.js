const { getTourService } = require("../../services/product.services");
const Tours = require("../../utils/Model");

module.exports.getTour = async (req, res, next) => {
    try {
        const filterUsingQuery = { ...req.query };

        // sort, page, limit => exclude
        const excludeFields = ["sort", "page", "limit"];
        excludeFields.forEach(field => delete filterUsingQuery[field]);

        const queries = {};
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(' ');
            queries.sortBy = sortBy;
        }

        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            queries.fields = fields;
        }

        const result = await Tours.find(filterUsingQuery).sort(queries.sortBy).select(queries.fields);

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
        const { id } = req.params;

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

// module.exports.getTourByQuery = async (req, res, next) => {
//     try {

//         const query = req.query;
//         console.log(query)


//         // to show specific data given from query
//         const result = await Tours.find({}, "name image");

//         res.status(200).send({
//             success: true,
//             message: "success",
//             data: result
//         })
//     } catch (error) {
//         res.status(400).send({
//             success: false,
//             message: "data not found",
//             error: error.message
//         })
//     }
// };


module.exports.getCheapestTourBySort = async (req, res, next) => {
    try {
        console.log("routed heated")

        // to show specific data given from query
        const result = await Tours.find({}).sort({ cost: 1 }).limit(3);

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

        const { id } = req.params;

        // const result = await Tours.find({ _id: id });
        //using mongoose
        const result = await Tours.findById(id)

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
        const { id } = req.params;

        const result = await Tours.deleteOne({ _id: id });

        if (!result.deletedCount) {
            return res.status(400).json({
                success: false,
                error: "tour not deleted"
            });
        };

        res.status(200).send({
            success: true,
            message: "success",
            data: result
        });
    } catch (error) {
        res.status(400).send({
            success: false,
            message: "success",
            error: error.message
        });
    };
};
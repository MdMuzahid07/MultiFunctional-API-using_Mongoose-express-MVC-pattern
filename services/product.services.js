const Tours = require("../utils/Model");

module.exports.getTourService = async () => {
    const tours = await Tours.find({});
    return tours;
}
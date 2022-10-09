const Tours = require("../utils/Model");

module.exports.getTourService = async (query) => {
    const tours = await Tours.find(query);
    return tours;
}
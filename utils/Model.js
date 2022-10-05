const mongoose = require("mongoose");
const { tourSchema } = require("./Schema");

const Tours = mongoose.model("Tour", tourSchema);
module.exports = Tours;

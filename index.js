const express = require('express');
const app = express();
const cors = require('cors');
const env = require("dotenv").config();
const mongoose = require('mongoose');
const tourRoutes = require('./routes/tours/v1/tours.router');
const { tourSchema } = require('./utils/Schema');
const DatabaseConnection = require('./utils/Database');
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());



// database connection

DatabaseConnection()


// routes
app.use("/api/v1/tours", tourRoutes);


app.get("/", (req, res, next) => {
    res.send("server running?")
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
});
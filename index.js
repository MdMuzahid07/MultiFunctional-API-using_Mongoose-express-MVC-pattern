const express = require('express');
const app = express();
const cors = require('cors');
const env = require("dotenv").config();
const mongoose = require('mongoose');
const productRoute = require('./routes/tours/v1/tours.router');
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

// database connection using mongoose
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log(`database connected using mongoose`);
});

// schema design
const toursSchema = mongoose.Schema(
    {

    }
);


app.use("/api/v1/tours", productRoute);


app.get("/", (req, res, next) => {
    res.send("server running?")
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
});
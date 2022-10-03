const express = require('express');
const app = express();
const cors = require('cors');
const env = require("dotenv").config();
const mongoose = require('mongoose');
const tourRoutes = require('./routes/tours/v1/tours.router');
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());

// database connection using mongoose
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
    console.log(`database connected using mongoose`);
});




//mongoose = schema => model => query


// schema design for tours
const tourSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please set a tour name"],
            trim: true,
            unique: [true, "name must be unique"],
            minLength: [5, "name must be at least 5 characters"],
            maxLength: [30, "name is too large"]
        },
        description: {
            type: String,
            requited: true
        },
        cost: {
            type: Number,
            required: true,
            min: [0, "price can't be negative"],
            validate: {
                validator: (value) => {
                    const isInteger = Number.isInteger(value);
                    if (isInteger) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            message: "cost or price must be an integer"
        },
        country: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
            enum: {
                values: ["available", "unavailable"],
                message: "status can't ne {VALUE}"
            }
        }
        // createdAt: {
        //     type: DATE,
        //     default: Date.now,
        // },
        // updatedAt: {
        //     type: Date,
        //     default: Date.now
        // }

    },
    {
        timestamps: true
    }

);

// model


const Tour = mongoose.model("Tour", tourSchema);



// query


// routes
app.use("/api/v1/tours", tourRoutes);


app.get("/", (req, res, next) => {
    res.send("server running?")
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
});
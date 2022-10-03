const mongoose = require('mongoose');
// schema design for tours
module.exports.tourSchema = mongoose.Schema(
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
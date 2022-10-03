const mongoose = require("mongoose");

// database connection using mongoose
const DatabaseConnection = () => {
    return mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
        console.log(`database connected using mongoose`);
    });
}

module.exports = DatabaseConnection;

const express = require('express');
const app = express();
const cors = require('cors');
const productRoute = require('./routes/tours/v1/tours.router');
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());


app.use("/api/v1/tours", productRoute);


app.get("/", (req, res, next) => {
    res.send("server running?")
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
});
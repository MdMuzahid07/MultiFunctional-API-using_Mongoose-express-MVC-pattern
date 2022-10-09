let count = 0;
const visitCount = (req, res, next) => {
    count++;
    console.log(count);

    next();
};

module.exports = visitCount;
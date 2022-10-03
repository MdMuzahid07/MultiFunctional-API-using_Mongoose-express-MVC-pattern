module.exports.getProducts = (req, res, next) => {
    const data = "get route working";

    res.status(200).send({
        success: true,
        message: "success",
        data: data
    })
}
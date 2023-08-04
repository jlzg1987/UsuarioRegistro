const errorHandler = (error, req, res, next) => {
    let { status } = error;

    return res.status(status || 500).json(
        {
            message: error.message,
            error: error.name,
        }
    )
}

module.exports = {

    errorHandler,

}
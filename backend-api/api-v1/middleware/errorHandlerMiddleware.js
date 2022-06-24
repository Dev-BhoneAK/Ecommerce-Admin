exports.notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

exports.errorHandler = (err, req, res, next) => {

    const statusCode = err.message !== '' ? (res.statusCode === 404 ? res.statusCode : 400) : (res.statusCode || 500);

    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}


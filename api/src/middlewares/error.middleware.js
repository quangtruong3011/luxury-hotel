export const errorHandlerMiddleware = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode).json({
        message: error.message,
        statusCode,
        stack: error.stack,
    });
};
/**
 *
 * @param message
 * @param errors
 * @param status
 */
exports.createError =  (message, errors, status) => {
    const error = new Error(message);
    error.data = errors;
    error.code = status;

    throw error;
}

/**
 *
 * @param res
 * @param errors
 * @param status
 */
exports.createResponseError =  (res, errors, status) => {
    const error = {
        errors,
    }
    res.statusCode = status;

    res.json(error);
}
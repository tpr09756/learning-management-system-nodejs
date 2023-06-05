const globalErrorHandler = (error,req,res,next) => {
  // status
  // message
  // stack
  const stack = error.stack;
  const message = error.message;
  const status = error.status ? error.status : 'failed';
  const statusCode = error.statusCode ? error.statusCode : 500;
  res.status(statusCode).json({
    status: status,
    message: message,
    stack: stack,
  })
}

//Not found
const notFoundError = (req, res, next) => {
  const err = new Error(`Cant't find ${req.originalUrl} on the server`);
  next(err);
}

module.exports = {globalErrorHandler, notFoundError};
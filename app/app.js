const express = require('express');
const morgan = require('morgan');

const {globalErrorHandler, notFoundError} = require('../middleware/globalErrorHandler');
const adminRouter = require('../routes/staff/admin.route');

const app = express();

//===== Middlewares
//app.use(morgan("dev"));
app.use(express.json()); // parse incoming json data
app.use((req, res, next)=>{
  console.log(`${req.method} ${req.originalUrl}`);
  next();
})


//Routes
//Admin Routes Middleware
app.use('/api/v1/admins', adminRouter);

//Error middleware
app.use(notFoundError);
app.use(globalErrorHandler);

module.exports = app;
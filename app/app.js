const express = require('express');
const morgan = require('morgan');

const adminRouter = require('../routes/staff/admin.route');

const app = express();

//===== Middlewares
//app.use(morgan("dev"));
app.use(express.json()); // parse incoming json data
app.use((req, res, next)=>{
  console.log(`${req.method} ${req.originalUrl}`);
})


//Routes
//Admin Routes Middleware
app.use('/api/v1/admins', adminRouter)

//Error middleware
app.use((error,req,res,next)=>{
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
})

module.exports = app;
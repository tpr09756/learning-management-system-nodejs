const express = require('express');
const morgan = require('morgan');

const adminRouter = require('../routes/staff/admin.route');

const app = express();

//===== Middlewares
app.use(morgan("dev"));

//Routes
//Admin Routes Middleware
app.use('/api/v1/admins', adminRouter)


module.exports = app;
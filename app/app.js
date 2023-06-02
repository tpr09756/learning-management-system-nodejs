const express = require('express');
const morgan = require('morgan');

const app = express();

//===== Middlewares
app.use(morgan("dev"));

//Routes
//Admin Register
app.post('/api/v1/admins/register', (req,res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: 'Admin has been registered'
    })
  } catch (error) {
    res.json({
       status : 'failed',
       error: error.message
    })
  }
})

//admin login
app.post('/api/v1/admins/login', (req,res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: 'Admin has been logged in'
    })
  } catch (error) {
    res.json({
       status : 'failed',
       error: error.message
    })
  }
})

// get all admin
app.get('/api/v1/admins', (req,res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: 'All admins'
    })
  } catch (error) {
    res.json({
       status : 'failed',
       error: error.message
    })
  }
})

// get single admin
app.get('/api/v1/admins/:id', (req,res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: 'single admin'
    })
  } catch (error) {
    res.json({
       status : 'failed',
       error: error.message
    })
  }
})

// update admin
app.put('/api/v1/admins/:id', (req,res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: 'update admin'
    })
  } catch (error) {
    res.json({
       status : 'failed',
       error: error.message
    })
  }
})

// delete admin
app.delete('/api/v1/admins/:id', (req,res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: 'delete admin'
    })
  } catch (error) {
    res.json({
       status : 'failed',
       error: error.message
    })
  }
})

// admin suspending teacher
app.put('/api/v1/admins/suspend/teacher/:id', (req,res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: 'admin suspend teacher'
    })
  } catch (error) {
    res.json({
       status : 'failed',
       error: error.message
    })
  }
})

// admin Unsuspending teacher
app.put('/api/v1/admins/unsuspend/teacher/:id', (req,res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: 'admin Unsuspend teacher'
    })
  } catch (error) {
    res.json({
       status : 'failed',
       error: error.message
    })
  }
})

// admin withdrawing a teacher
app.put('/api/v1/admins/withdraw/teacher/:id', (req,res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: 'admin withdraw teacher'
    })
  } catch (error) {
    res.json({
       status : 'failed',
       error: error.message
    })
  }
})

// admin Unwithdrawing a teacher
app.put('/api/v1/admins/unwithdraw/teacher/:id', (req,res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: 'admin unwithdraw teacher'
    })
  } catch (error) {
    res.json({
       status : 'failed',
       error: error.message
    })
  }
})

// admin publishing exam results
app.put('/api/v1/admins/publish/exam/:id', (req,res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: 'admin exam results'
    })
  } catch (error) {
    res.json({
       status : 'failed',
       error: error.message
    })
  }
})

// admin unpublishing exam results
app.put('/api/v1/admins/unpublish/exam/:id', (req,res) => {
  try {
    res.status(201).json({
      status: 'success',
      data: 'admin unpublishing exam results'
    })
  } catch (error) {
    res.json({
       status : 'failed',
       error: error.message
    })
  }
})

module.exports = app;
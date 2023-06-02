const express = require('express');

const adminRouter = express.Router();

// register
adminRouter.post('/register', (req,res) => {
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
});

//login
adminRouter.post('/', (req,res) => {
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
});

//get all admins
adminRouter.get('/', (req,res) => {
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
});

// get single admin
adminRouter.get('/:id', (req,res) => {
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
});

// update admin
adminRouter.put('/:id', (req,res) => {
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
});

// delete admin
adminRouter.delete('/:id', (req,res) => {
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
});

// admin suspending teacher
adminRouter.put('/suspend/teacher/:id', (req,res) => {
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
});

// admin Unsuspending teacher
adminRouter.put('/unsuspend/teacher/:id', (req,res) => {
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
});

// admin withdrawing a teacher
adminRouter.put('/withdraw/teacher/:id', (req,res) => {
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
});

// admin Unwithdrawing a teacher
adminRouter.put('/unwithdraw/teacher/:id', (req,res) => {
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
});

// admin publishing exam results
adminRouter.put('/publish/exam/:id', (req,res) => {
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
});

// admin unpublishing exam results
adminRouter.put('/unpublish/exam/:id', (req,res) => {
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
});


module.exports = adminRouter;
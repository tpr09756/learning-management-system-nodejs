const express = require('express');

const adminRouter = express.Router();

const {registerAdminCtrl,
  loginAdminCtrl,
  getAdminsCtrl,
  getAdminProfileCtrl,
  updateAdminCtrl,
  deleteAdminCtrl,
  adminSuspendTeacherCtrl,
  adminUnsuspendTeacherCtrl,
  adminWithdrawTeacherCtrl,
  adminUnwithdrawTeacherCtrl,
  adminPublishResultsCtrl,
  adminUnPublishResultsCtrl} = require('../../controllers/staff/admin.controller');
const isLogin = require('../../middleware/isLogin');
const isAdmin = require('../../middleware/isAdmin');

// register
adminRouter.post('/register', registerAdminCtrl);

//login
adminRouter.post('/login', loginAdminCtrl);

//get all admins
adminRouter.get('/', isLogin, getAdminsCtrl);

// get single admin
adminRouter.get('/profile', isLogin, isAdmin, 
getAdminProfileCtrl);

// update admin
adminRouter.put('/', isLogin, isAdmin, 
updateAdminCtrl );

// delete admin
adminRouter.delete('/:id',
deleteAdminCtrl );

// admin suspending teacher
adminRouter.put('/suspend/teacher/:id',
adminSuspendTeacherCtrl );

// admin Unsuspending teacher
adminRouter.put('/unsuspend/teacher/:id',
adminUnsuspendTeacherCtrl );

// admin withdrawing a teacher
adminRouter.put('/withdraw/teacher/:id',
adminWithdrawTeacherCtrl );

// admin Unwithdrawing a teacher
adminRouter.put('/unwithdraw/teacher/:id',
adminUnwithdrawTeacherCtrl );

// admin publishing exam results
adminRouter.put('/publish/exam/:id',
adminPublishResultsCtrl );

// admin unpublishing exam results
adminRouter.put('/unpublish/exam/:id',
adminUnPublishResultsCtrl );


module.exports = adminRouter;
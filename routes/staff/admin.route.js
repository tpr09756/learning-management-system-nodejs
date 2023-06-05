const express = require('express');

const adminRouter = express.Router();

const isLogin = require('../../middleware/isLogin');
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

// register
adminRouter.post('/register', registerAdminCtrl);

//login
adminRouter.post('/login', loginAdminCtrl);

//get all admins
adminRouter.get('/', getAdminsCtrl);

// get single admin
adminRouter.get('/profile', isLogin,
getAdminProfileCtrl);

// update admin
adminRouter.put('/:id',
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
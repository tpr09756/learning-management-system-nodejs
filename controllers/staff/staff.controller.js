
//@desc Register admin
//@route POST /api/admins/register
//@access Private 
const registerAdminCtrl = (req,res) => {
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
};

//@desc Login admin
//@route POST /api/v1/admins/login
//@access Private
const loginAdminCtrl = (req,res) => {
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
}

//@desc Get all admins
//@route GET /api/v1/admins
//@access Private
const getAdminsCtrl = (req,res) => {
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
}

//@desc Get single admin
//@route GET /api/v1/admins/:id
//@access Private
const getSingleAdminCtrl = (req,res) => {
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
};

//@desc Update admin
//@route UPDATE /api/v1/admins/:id
//@access Private
const updateAdminCtrl = (req,res) => {
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
}

//@desc Delete admin
//@route DELETE /api/v1/admins/:id
//@access Private
const deleteAdminCtrl = (req, res) => {
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
}

//@desc Admin suspends a teacher
//@route PUT /api/v1/admins/suspend/teacher/:id
//@access Private
const adminSuspendTeacherCtrl = (req,res) => {
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
}

//@desc Admin unsuspend teacher
//@route PUT /api/v1/admins/unsuspend/teacher/:id
//@access Private
const adminUnsuspendTeacherCtrl = (req,res) => {
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
}

//@desc Withdraw teacher
//@route PUT /api/v1/admins/unsuspend/teacher/:id
//@access Private
const adminWithdrawTeacherCtrl = (req,res) => {
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
}

//@desc unWithdraw teacher
//@route PUT /api/v1/admins/unwithdraw/teacher/:id
//@access Private
const adminUnwithdrawTeacherCtrl = (req,res) => {
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
};

//@desc admin publish exam results
//@route PUT /api/v1/admins/publish/exam/:id
//@access Private
const adminPublishResultsCtrl = (req,res) => {
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
};

//@desc admin unpublish exam results
//@route PUT /api/v1/admins/unpublish/exam/:id
//@access Private
const adminUnPublishResultsCtrl = (req,res) => {
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
}

module.exports = {
  registerAdminCtrl: registerAdminCtrl,
  loginAdminCtrl: loginAdminCtrl,
  getAdminsCtrl: getAdminsCtrl,
  getSingleAdminCtrl:getSingleAdminCtrl,
  updateAdminCtrl: updateAdminCtrl,
  deleteAdminCtrl: deleteAdminCtrl,
  adminSuspendTeacherCtrl: adminSuspendTeacherCtrl,
  adminUnsuspendTeacherCtrl: adminUnsuspendTeacherCtrl,
  adminWithdrawTeacherCtrl: adminWithdrawTeacherCtrl,
  adminUnwithdrawTeacherCtrl: adminUnwithdrawTeacherCtrl,
  adminPublishResultsCtrl: adminPublishResultsCtrl,
  adminUnPublishResultsCtrl: adminUnPublishResultsCtrl,
}
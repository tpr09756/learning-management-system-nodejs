const Admin = require('../model/Staff/Admin');


const isLogin = async (req, res, next) => {
  // Find the user
  const userId = req.userAuth._id;
  const adminFound = await Admin.findById(userId);
  // Check if admin
  if (adminFound?.role === 'admin') {
    next();
    } else {
     next(new Error('Access denied, admin only'));
    }
}

module.exports = isAdmin;
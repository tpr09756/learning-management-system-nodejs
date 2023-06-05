const Admin = require('../model/Staff/Admin');
const verifyToken = require('../utils/verifyToken');

const isLogin = async (req, res, next) => {
 // Get Token from header
 const headerObj = req.headers;
 // Verify token
 const token = headerObj.authorization.split(' ')[1];
 const verifiedToken = verifyToken(token);
  if(verifiedToken) {
    //Find Adminuser
    const user = await Admin.findById(verifiedToken.id).select('name email role');
    // Save user in request object
    req.userAuth = user;
    next();
  } else {
    const error = new Error('Expired / Invalid Token');
    next(error);
  }
}

module.exports = isLogin;
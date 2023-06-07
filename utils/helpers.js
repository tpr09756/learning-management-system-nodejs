const bcrypt = require('bcryptjs');
// hash function
hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
}

isPassMatched = async (password, hash) => {
   return await bcrypt.compare(password, hash);
}

module.exports={
  hashPassword,
  isPassMatched
}

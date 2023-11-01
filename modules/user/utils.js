const crypto = require('node:crypto');


function encrypt(password) {
  const sha256Hash = crypto.createHash('sha256');
  sha256Hash.update(password, 'utf8');
  return sha256Hash.digest('hex');
}

function validatePassword(password, input) {
  return encrypt(input) === password;
}

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

module.exports = {
  encrypt,
  validatePassword,
  generateToken,
}
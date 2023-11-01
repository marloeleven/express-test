
const db = require('../database');
const utils = require('./utils');

/**
 * @typedef {require('./type').User} User
 */


/**
 * 
 * @param {string} username 
 * @returns {boolean}
 */
async function isUsernameUnique(username) {
  const user = await db.get(`SELECT username FROM users WHERE username = ?`, [username])

  if (user) {
    return false
  }

  return true;
}

/**
 * 
 * @param {string} token 
 * @returns {boolean}
 */
async function validateToken(token) {
  const user = await db.get(`SELECT username FROM users WHERE token = ?`, [token])

  return user;
}

async function updateToken(token, username) {
  return db.set(`UPDATE users SET token = ? WHERE username = ?`, [token, username])
}

/**
 * 
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<User>}
 */
async function login(username, password) {
  const user = await db.get(`SELECT username, password FROM users WHERE username = ?`, [username])

  if (user && utils.validatePassword(user.password, password)) {
    const token = utils.generateToken();

    await updateToken(token, username);

    return token;
  }

  return false;
}

module.exports = {
  login,
  validateToken,
  isUsernameUnique,
}
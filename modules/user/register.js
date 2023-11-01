/**
 * @typedef {require('./type').User} User
 */

/**
 * @param {user} data 
 * @returns {Promise<User>}
 */
async function register(data) {
  return db.set(`INSERT INTO users (
      username,
      password,
      first_name,
      middle_name,
      last_name,
      description,
      birth_date,
      updated_at,
      created_at
    ) values (
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?
    )`,
    [
      data.username,
      data.password,
      data.first_name,
      data.middle_name,
      data.last_name,
      data.description,
      data.birth_date,
      data.updated_at,
      data.created_at
    ])
}

module.exports = {
  register
}
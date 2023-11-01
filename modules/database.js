const sqlite3 = require("sqlite3").verbose();
const path = require("path");

/**
 * 
 * @param {string} query 
 * @param {function} onError
 * @returns {T}
 */
const db = new sqlite3.Database(path.resolve("./db/blog.db"));


/**
 * 
 * @param {string} query 
 * @param {T[]} args 
 * @returns 
 */
function get(query, args) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const stmt = db.prepare(query);
      stmt.get(...args, (err, row) => {
        if (err) {
          stmt.finalize();
          reject(err);
          return;
        }

        stmt.finalize();
        resolve(row);
      });
    })
  })
}

function set(query, args) {
  return new Promise((resolve, reject) => {
    db.serialize(() => {
      const stmt = db.prepare(query);
      stmt.run(...args, (err, row) => {
        if (err) {
          stmt.finalize();
          reject(err);
          return;
        }

        stmt.finalize();
        resolve(row);
      });
    })
  })
}

module.exports = {
  get, set
};
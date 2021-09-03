const db = require("../config/configPostgreSQL");

const executeQuery = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, queryRes) =>{
      if(err){
        reject(err)
      } else {
        resolve(queryRes.rows)
      }
    })
  })
}

module.exports = executeQuery;
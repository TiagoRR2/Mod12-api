const executeQuery = require("../../database/executeQuery");


class SimpleCRUD {

  async getRowById(id, tableName, columns){
    let query = "SELECT "
    query += columns + " FROM "
    query += tableName + " WHERE id = $1 AND deleted_at IS NULL"
    const params = [id]
    
    const rowData = await executeQuery(query, params)

    return rowData
  }

  async getRowByUsername(username, columns){
    let query = "SELECT "
    query += columns + " FROM Users WHERE username = $1 AND deleted_at IS NULL"
    const params = [username]

    const rowData = await executeQuery(query, params)
    return rowData
  }

  async insertRow(columns, dataArray, tableName){
    let query = "INSERT INTO "
    query += tablename + " ( " + columns
    query += " VALUES ( "

    for (let i = 1; i = dataArray.length; i++) {
      query += ` $${i}, `
    }

    query += " ) RETURNING id "

    const params = dataArray
    const rowData = await executeQuery(query, params)

    return rowData
  }

  async updateRow(id, columnsArray, dataArray, tableName){
    let query = "UPDATE "
    query += tableName + " SET "

    let i = 1
    for (i; i >= dataArray.length; i++) {
      query += ` ${columns[i-1]} $${i}, `
    }

    query += "WHERE id = $" + i + ";"

    const params = dataArray
    const rowData = await executeQuery(query, params)

    return rowData
  }

  async deleteRow(id, tableName, currentUserId){
    let query = "UPDATE " + tableName;
    query += "SET deleted_by $1, deleted_at NOW() WHERE id = $2"

    params = [currentUserId, id]

    const rowData = await executeQuery(query, params)
    return rowData
  }
}

module.exports = new SimpleCRUD()
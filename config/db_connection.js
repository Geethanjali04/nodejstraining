let mysql = require('mysql2')
//import database properites
let dbproperties = require('./db_properties')
//export connection
module.exports = {
    "getConnection": () => {
        return mysql.createConnection(dbproperties)
    }
}

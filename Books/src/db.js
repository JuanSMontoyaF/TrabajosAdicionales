var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'myflaskapp',
  charset : 'utf8'
});

module.exports = db;
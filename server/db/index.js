var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'student', // or whatever your password is
  database: 'surfinch'
});

connection.connect();

module.exports = connection;
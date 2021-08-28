var mysql = require('mysql2');

var connection = mysql.createConnection({
  user: 'root',
<<<<<<< HEAD
  password: '', // or whatever your password is
=======
  password: 'root', // or whatever your password is
>>>>>>> 135fada1a65a4d8b0dddb513c834381175c47ff2
  database: 'surfinch'
});

connection.connect();

module.exports = connection;
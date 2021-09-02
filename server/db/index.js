var mysql = require('mysql2');

var connection = mysql.createConnection({
<<<<<<< HEAD
  user: 'root',
  password: '', // or whatever your password is
=======
  user: 'student',
  password: 'student', // or whatever your password is

>>>>>>> 5c24c3f8d577f47b88e53c9021d412caebaba971
  database: 'surfinch'
});

connection.connect(function () {
  console.log('Connected to db');
});

module.exports = connection;

var mysql = require('mysql2');

var connection = mysql.createConnection({
  user: 'root',
<<<<<<< HEAD
  password: 'root', // or whatever your password is
=======
  password: '', // or whatever your password is
>>>>>>> 0a4e92f0a57da7c5e89ef9934e02e443693c0701
  database: 'surfinch'
});

connection.connect(function () {
  console.log('Connected to db');
});

module.exports = connection;
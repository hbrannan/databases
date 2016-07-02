var mysql = require('mysql');
var app = require('./app.js');

exports.connection = mysql.createConnection({
  user: 'root',
  password: 'carpool',
  database: 'chat'
});

//do we need to export this func call?
connection.connect();


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


/*
https://www.youtube.com/watch?v=tPd4m3PLVqU
http://stackoverflow.com/questions/22423746/run-mysql-on-sublime-text-2
*/

//write the funx that EXPRESS (method that connects to the DB)
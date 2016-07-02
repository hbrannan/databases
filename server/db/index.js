var mysql = require('mysql');


mysql.server start
mysqladmin -u root password

exports.mysql.user = root


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
ALTER USER 'root'@'localhost' IDENTIFIED BY null;


/*
https://www.youtube.com/watch?v=tPd4m3PLVqU
http://stackoverflow.com/questions/22423746/run-mysql-on-sublime-text-2
*/
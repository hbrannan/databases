var mysql = require('mysql');
var app = require('../app.js');
var monkey = require('node-monkey').start({'host': '127.0.0.1', 'port': '5050'});

//node inspector set up
////   // "test": "node-inspector --no-preload & mocha server/spec/server-spec.js --debug-brk; RES=$?; kill %1; exit $RES",

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'carpool',
  database: 'chat'
});

//do we need to export this func call?
// connection.connect();

/*
https://www.youtube.com/watch?v=tPd4m3PLVqU
http://stackoverflow.com/questions/22423746/run-mysql-on-sublime-text-2
*/

//write the funx that EXPRESS (method that connects to the DB)
exports.connection = connection;
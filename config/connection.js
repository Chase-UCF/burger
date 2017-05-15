var mysql = require("mysql");
// jaws_db is from heroku variable-- it will connect to that db or go to localhost
var connection = mysql.createConnection(process.env.JAWSDB_URL ||{
	port: 3306,
	host: "localhost",
	user: "root",
	password: "1226",
	database: "burgers_db"
});

connection.connect();

module.exports = connection;
var mysql = require('mysql');

var dbConnection = function(){

	return mysql.createConnection({
			host : 'localhost',
			port : '3308',
			user: 'root',
			password: '',
			database: 'portal_noticias'
		});

}

module.exports = function(){

		return dbConnection;

	};
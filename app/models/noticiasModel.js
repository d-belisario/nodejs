module.exports = function(app){

	this.getNoticias = function(connection, callback){
		connection.query('SELECT * FROM noticias', callback);
	};

	this.getNoticia = function(connection, callback){
		connection.query('SELECT * FROM noticias where id_noticias = 1', callback);
	};

	return this;

}
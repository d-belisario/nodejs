module.exports = function(app){

app.get('/noticias', function(req, res){
		
		var connection = app.config.dbConfig();
		var noticiaModel = new app.app.models.noticiasModel(connection);
		
		noticiaModel.getNoticias(function(error, result){
		
		res.render('noticias/noticias', {noticias: result});
	});
});
}

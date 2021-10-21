module.exports = function(app){

app.get('/noticia', function(req, res){
		
		var connection = app.config.dbConfig();
		var noticiaModel = new app.app.models.noticiasModel(connection);

		noticiaModel.getNoticia(function(error, result){
		
			res.render('noticias/noticia', {noticia: result});
			
		});
});
}
		

